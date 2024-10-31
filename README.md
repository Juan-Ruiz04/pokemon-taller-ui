### Poketaller UI

## Descripción del Componente

- * Poketaller UI es un componente de interfaz de usuario diseñado para mostrar una lista de Pokémon, permitiendo a los usuarios buscar y cargar más Pokémon, así como visualizar las evoluciones de cada uno.

# Objetivos del Componente

- * Mostrar una lista de Pokémon con información relevante (nombre, imagen, tipos).
- * Permitir a los usuarios buscar y cargar más Pokémon.
- * Visualizar las evoluciones de cada Pokémon.

* Propiedades y Métodos

## Propiedades

- * name: Nombre del componente (tipo String).
- * pokemons: Lista de Pokémon (tipo Array).
- * pokemonCount: Número de Pokémon a cargar (tipo Number).
- * loading: Indicador de carga (tipo Boolean).
- * selectedPokemonEvolutions: Lista de evoluciones del Pokémon seleccionado (tipo Array).
- * showModal: Indicador para mostrar el modal de evoluciones (tipo Boolean).

## Métodos

- * firstUpdated(): Método que se ejecuta al iniciar el componente, carga los Pokémon y asigna los valores iniciales.
- * updatePokemonCount(event): Método que actualiza el valor de pokemonCount cuando el usuario cambia el valor en el input.
- * handleFetchButtonClick(): Método que maneja el clic del botón de carga, carga más Pokémon y actualiza la lista.
- * fetchEvolutions(pokemonId): Método que obtiene las evoluciones de un Pokémon específico y muestra el modal.
- * closeModal(): Método que cierra el modal de evoluciones.

## Estilos

- * Los estilos se encuentran en el archivo poketaller-ui.scss.

##Uso

Para utilizar este componente, simplemente importa el archivo JavaScript y agrega el componente <poketaller-ui> a tu componente que has chreado dentro de src.


<poketaller-ui></poketaller-ui>


## Dependencias

- * lit-element
- * @bbva-web-components/bbva-core-lit-helpers
- * @bbva-web-components/bbva-button-default
- * @bbva-web-components/bbva-progress-content
- * @pokedex/poketaller/poketaller-dm


## Contribución

Para contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Clona el repositorio.
2. Crea una rama para tu contribución.
3. Realiza tus cambios y commit.
4. Envía un pull request.

## Autores

- * Juan LUis Mejia Ruiz
