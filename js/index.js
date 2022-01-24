import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Card from "./Card-Components.js";
import CardText from "./Card-text.js";
import { joffrey } from "./got.js";

const list = document.querySelector(".characters-list");
const { nombre } = joffrey;
const { familia } = joffrey;
const imagenJoffrey = "img/jofrrey.jpg";

const divCard = document.querySelector(".card-body-bod");

const cardPersonaje = new Card(list, imagenJoffrey, nombre, familia);
/* export default cardPersonaje; */
const CardPersonajeText = new CardText(divCard, joffrey, joffrey);
