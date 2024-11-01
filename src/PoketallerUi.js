import { LitElement, html, css } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './poketaller-ui.css.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-progress-content/bbva-progress-content.js';
import '@pokedex/poketaller/poketaller-dm.js';


export class PoketallerUi extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      pokemons: { type: Array },
      pokemonCount: { type: Number },
      loading: { type: Boolean },
      selectedPokemonEvolutions: { type: Array },
      showModal: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.name = 'Cells';
    this.pokemons = [];
    this.pokemonCount = 20;
    this.loading = false;
    this.selectedPokemonEvolutions = [];
    this.showModal = false;
  }
async firstUpdated() {
  const pokemondm = this.shadowRoot.querySelector('#pokemondm');
  pokemondm.pokemonCount = this.pokemonCount;  
  this.loading = true;  
  await pokemondm.fetchPokemon();
  this.pokemons = pokemondm.pokemons; 
  this.loading = false;
}



updatePokemonCount(event) {
  this.pokemonCount = Number(event.target.value);
}

async handleFetchButtonClick() {
  const pokemondm = this.shadowRoot.querySelector('#pokemondm');
  pokemondm.pokemonCount = this.pokemonCount;  
  this.loading = true;  
  await pokemondm.fetchPokemon();  
  this.pokemons = pokemondm.pokemons;  
  this.loading = false;  
}



  static get styles() {
    return [
      styles,
      getComponentSharedStyles('poketaller-ui-shared-styles'),
      css`

    ];
  }


async fetchEvolutions(pokemonId) {
  const pokemondm = this.shadowRoot.querySelector('#pokemondm');
  await pokemondm.fetchEvolutions(pokemonId);
  this.selectedPokemonEvolutions = pokemondm.selectedPokemonEvolutions;
  this.showModal = true;  // Muestra el modal
}

closeModal() {
  this.showModal = false;
  this.selectedPokemonEvolutions = [];
}

render() {
  return html`
    <h1 style="text-align: center; color: #2344;">Lista de Pokemones</h1>

    <div class="input-container">
      <input type="number" placeholder="Ingresa la cantidad que deseas ver" 
      @input="${this.updatePokemonCount}" min="1" max="1010" />
      <bbva-button-default @click="${this.handleFetchButtonClick}" 
      style="margin-left: 10px;">Cargar Pokémon</bbva-button-default>
    </div>
    <bbva-progress-content ?visible="${this.loading}"></bbva-progress-content>
    <div class="card-container">
      ${this.pokemons.map(pokemon => html`
        <div class="pokemon-card">
          <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
          <div class="pokemon-name">${pokemon.name}</div>
          <div class="pokemon-types">Tipos: ${pokemon.types}</div>
          <bbva-button-default @click="${() => this.fetchEvolutions(pokemon.id)}"
          style="margin-top: 10px; width: 80%;">Evoluciones</bbva-button-default>
        </div>
      `)}
    </div>

    ${this.showModal ? html`
      <div class="modal">
        <div class="modal-content">
          <h2>Evoluciones de Pokémon</h2>
          ${this.selectedPokemonEvolutions.map(evolution => html`
            <div class="evolution-card">
              <img src="${evolution.imageUrl}" alt="${evolution.name}">
              <div>
                <div class="pokemon-name">${evolution.name}</div>
                <div class="pokemon-types">Tipos: ${evolution.types}</div>
              </div>
            </div>
          `)}
          <button class="close-button" @click="${this.closeModal}">Cerrar</button>
        </div>
      </div>
    ` : ''}
    <poketaller-dm id="pokemondm"></poketaller-dm>
  `;
}
}
customElements.define('poketaller-ui', PoketallerUi);
