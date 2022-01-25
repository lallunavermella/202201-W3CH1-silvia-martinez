import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";

class Emoji {
  element;
  constructor(character, parentElement) {
    this.element = document.createElement("i");
    this.element.className = "emoji";

    if (character instanceof Rey) {
      this.element.innerHTML = "👑";
    }
    if (character instanceof Luchador) {
      this.element.innerHTML = "🗡";
    }
    if (character instanceof Escudero) {
      this.element.innerHTML = "🛡";
    }
    if (character instanceof Asesor) {
      this.element.innerHTML = "🎓";
    }

    parentElement.append(this.element);
  }
}

export default Emoji;
