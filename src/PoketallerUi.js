import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './poketaller-ui.css.js';

export class PoketallerUi extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      pokemons: { type: Array },
    };
  }

  constructor() {
    super();
    this.name = 'Cells';
    this.pokemons = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('poketaller-ui-shared-styles'),
    ];
  }

  async fetchPokemon() {
    const promises = [];
    for (let i = 1; i <= 20; i++) {
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    }
    const pokemonData = await Promise.all(promises);
    this.pokemons = pokemonData.map(pokemon => ({
      name: pokemon.name,
      imageUrl: pokemon.sprites.front_default,
      types: pokemon.types.map(typeInfo => typeInfo.type.name).join(', '),
    }));
  }

  render() {
    return html`
      <bbva-foundations-grid-default-layout layout='[
        {"slot":"first","cols":{"xs":4,"sm":4,"md":4,"lg":4}},
        {"slot":"second","cols":{"xs":4,"sm":4,"md":4,"lg":4}},
        {"slot":"third","cols":{"xs":4,"sm":4,"md":4,"lg":4}},
        {"slot":"fourth","cols":{"xs":4,"sm":4,"md":4,"lg":4}},
        {"slot":"fifth","cols":{"xs":4,"sm":4,"md":4,"lg":4}},
        {"slot":"sixth","cols":{"xs":4,"sm":4,"md":4,"lg":4}}
      ]'>
        ${this.pokemons.map((pokemon, index) => html`
          <div slot="${['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][index % 6]}" class="element">
            <div style="text-align: center; padding: 10px; background-color: #EBF7FE; width: calc(33.33% - 20px); box-shadow: 0 4px 8px rgba(100, 40, 330, 0.5); border: 1px solid #2344; margin: 20px; border-radius: 8px;">
              <bbva-type-text>${pokemon.name}</bbva-type-text>
              <p>Tipos: ${pokemon.types}</p> <!-- Mostrar los tipos --> 
              <img src="${pokemon.imageUrl}" alt="${pokemon.name}" style="width: 100px; height: 100px;">
              <bbva-button-default ?active="${true}" style="margin-top: 10px; width: 100%;">Ver detalles</bbva-button-default>
            </div>
          </div>
        `)}
      </bbva-foundations-grid-default-layout>
      <slot></slot>
    `;
  }
}
customElements.define('poketaller-ui', PoketallerUi);
