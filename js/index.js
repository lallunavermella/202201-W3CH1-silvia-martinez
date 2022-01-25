import Card from "./Card-Components.js";
import CardText from "./Card-text.js";
import { joffrey, daenerys, bronn, jaime, tyrion } from "./got.js";
import CardSubtext from "./card-subtext.js";

const createCardCharacter = (character, image) => {
  const list = document.querySelector(".characters-list");
  const card = new Card(list, image, character.nombre, character.familia);
  const CardCharacterText = new CardText(
    card.body,
    character.nombre,
    character.familia
  );
  const CardCharacterSubtext = new CardSubtext(character, card.body);
};

const imagenJoffrey = "img/joffrey.jpg";
const imagenDaenerys = "img/daenerys.jpg";
const imagenTyrion = "img/tyrion.jpg";
const imagenBronn = "img/bronn.jpg";
const imagenJaime = "img/jaime.jpg";

createCardCharacter(joffrey, imagenJoffrey);
createCardCharacter(tyrion, imagenTyrion);
createCardCharacter(bronn, imagenBronn);
createCardCharacter(jaime, imagenJaime);
createCardCharacter(daenerys, imagenDaenerys);
