import Card from "./Card-Components.js";
import CardText from "./Card-text.js";
import { joffrey, daenerys, bronn, jaime, tyrion } from "./got.js";
import CardSubtext from "./card-subtext.js";
import PageComponent from "./PageComponent.js";
import Overlay from "./Overlay.js";
import Emoji from "./Emoji.js";
import personajes from "./personajes.js";

new PageComponent(document.body, "div", "app");

const createCardCharacter = (character) => {
  const list = document.querySelector(".characters-list");

  const card = new Card(list, character.nombre, character.familia);

  const CardCharacterText = new CardText(
    card.body,
    character.nombre,
    character.familia
  );
  const CardCharacterSubtext = new CardSubtext(character, card.body);
  const cardBody = document.querySelectorAll(".card-body");
  const cardOverlay = new Overlay(
    cardBody[cardBody.length - 1],
    character.anyosReinado,
    character.arma,
    character.destreza,
    character.pelotismo,
    character.asesorado,
    character.sirveA
  );
  const emoji = new Emoji(character, card.body);
};

createCardCharacter(joffrey);
createCardCharacter(tyrion);
createCardCharacter(bronn);
createCardCharacter(jaime);
createCardCharacter(daenerys);
