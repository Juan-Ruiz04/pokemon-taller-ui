import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';


export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

input[type=number] {
  width: 80px;
  padding: 5px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

bbva-button-default {
  height: 40px;
}

/* Estilos generales y del contenedor */
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

input[type=number] {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #a5c0d5;
  border-radius: 5px;
}

.card-container {
  display: grid;
  margin: 5px 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
}

.pokemon-card {
  background: linear-gradient(135deg, #C3Df9F, #81F0f0);
  border: 1px solid #000;
  border-radius: 12px;
  box-shadow: 0 4px 7px rgb(0, 0, 0);
  padding: 15px;
  text-align: center;
  transition: transform 0.2s;
}

.pokemon-card:hover {
  transform: scale(1.05);
}

.pokemon-card img {
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
}

.pokemon-name {
  font-weight: bold;
  color: #333;
}

/* Estilos del modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background: linear-gradient(rgb(165, 185, 183), rgb(208, 255, 235));
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 17px rgb(0, 0, 0);
  width: 80%;
  max-width: 500px;
  text-align: center;
}

.close-button {
  background-color: #ff4c4c;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.evolution-card {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.evolution-card img {
  width: 90px;
  height: 120px;
  margin-right: 50px;
}
`;
