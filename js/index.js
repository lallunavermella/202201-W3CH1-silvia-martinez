import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Card from "./Card-Components.js";
import CardText from "./Card-text.js";
import { joffrey } from "./got.js";
import CardSubtext from "./card-subtext.js";

const list = document.querySelector(".characters-list");
const { nombre } = joffrey;
const { familia } = joffrey;
const imagenJoffrey = "img/joffrey.jpg";

const cardJeoffreyPersonaje = new Card(list, imagenJoffrey, nombre, familia);

const divCard = document.querySelector(".card-body");

const CardJeoffreyText = new CardText(divCard, joffrey.nombre, joffrey.familia);

const CardJeoffreyjeSubtext = new CardSubtext(joffrey, divCard);
