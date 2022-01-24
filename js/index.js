import Card from "./Card-Components.js";
import CardText from "./Card-text.js";
import { joffrey, daenerys, bronn, jaime, tyrion } from "./got.js";
import CardSubtext from "./card-subtext.js";

const list = document.querySelector(".characters-list");

const imagenJoffrey = "img/joffrey.jpg";

const imagenDaenerys = "img/daenerys.jpg";

const cardJeoffreyPersonaje = new Card(
  list,
  imagenJoffrey,
  joffrey.nombre,
  joffrey.familia
);

const CardJeoffreyText = new CardText(
  cardJeoffreyPersonaje.body,
  joffrey.nombre,
  joffrey.familia
);
const CardJeoffreyjeSubtext = new CardSubtext(
  joffrey,
  cardJeoffreyPersonaje.body
);

const cardDaenerysPersonaje = new Card(
  list,
  imagenDaenerys,
  daenerys.nombre,
  daenerys.familia
);

const CardDaenerysText = new CardText(
  cardDaenerysPersonaje.body,
  daenerys.nombre,
  daenerys.familia
);
const CardDaenerysjeSubtext = new CardSubtext(
  daenerys,
  cardDaenerysPersonaje.body
);

/* const cardJeoffreyPersonaje = new Card(list, imagenJoffrey, nombre, familia);
const divCard = document.querySelector(".card-body");
const CardJeoffreyText = new CardText(divCard, joffrey.nombre, joffrey.familia);
const CardJeoffreyjeSubtext = new CardSubtext(joffrey, divCard);
 */
