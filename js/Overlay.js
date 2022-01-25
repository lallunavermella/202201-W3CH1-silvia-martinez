import Card from "./Card-Components.js";

class Overlay extends Card {
  element;
  constructor(
    parentElement,
    nombre,
    familia,
    reinado,
    arma,
    destreza,
    peloteo,
    asesora,
    sirve
  ) {
    super(parentElement, nombre, familia);
    this.element = document.createElement("div");
    this.element.className = "character__overlay";

    this.element.innerHTML = `<ul class="list-unstyled">
                  <li>Años de reinado: ${reinado}</li>
                  <li>Arma: ${arma}</li>
                  <li>Destreza: ${destreza}</li>
                  <li>Peloteo: ${peloteo}</li>
                  <li>Asesora a: ${asesora}</li>
                  <li>Sirve a: ${sirve}</li>
                </ul>`;

    parentElement.append(this.element);
  }
}
export default Overlay;
