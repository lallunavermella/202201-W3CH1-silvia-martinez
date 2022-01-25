import Card from "./Card-Components.js";
import CardText from "./Card-text.js";
import { joffrey, daenerys, bronn, jaime, tyrion } from "./got.js";
import CardSubtext from "./card-subtext.js";
import PageComponent from "./PageComponent.js";

new PageComponent(document.body, "div", "app");

const createCardCharacter = (character) => {
  const list = document.querySelector(".characters-list");
  const card = new Card(list, character.nombre, character.familia);
  console.log(character.nombre);
  const CardCharacterText = new CardText(
    card.body,
    character.nombre,
    character.familia
  );
  const CardCharacterSubtext = new CardSubtext(character, card.body);
};

export const cardJeoffrey = createCardCharacter(joffrey);
createCardCharacter(tyrion);
createCardCharacter(bronn);
createCardCharacter(jaime);
createCardCharacter(daenerys);
