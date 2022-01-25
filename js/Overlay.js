class Overlay {
  element;
  constructor(parentElement, reinado, arma, destreza, peloteo, asesora, sirve) {
    this.element = document.createElement("div");
    this.element.className = "character__overlay";

    // <li>Arma: ${arma}</li>
    let armaHtml = "";
    if (arma) {
      armaHtml = `<li>Arma: ${arma}</li>`;
    }
    let reinadoHtml = "";
    if (reinado) {
      reinadoHtml = `<li>Años de reinado: ${reinado}</li>`;
    }
    let destrezaHtml = "";
    if (destreza) {
      destrezaHtml = `<li>Destreza: ${destreza}</li>`;
    }
    let peloteoHtml = "";
    if (peloteo) {
      peloteoHtml = `<li>Peloteo: ${peloteo}</li>`;
    }
    let asesorHtml = "";
    if (asesora) {
      asesorHtml = `<li>Asesora a: ${asesora.nombre}</li>`;
    }
    let sirveHtml = "";
    if (sirve) {
      sirveHtml = `<li>Sirve a: ${sirve.nombre}</li>`;
    }

    this.element.innerHTML = `<ul class="list-unstyled">
                  ${reinadoHtml}
                  ${armaHtml}
                  ${destrezaHtml}
                  ${peloteoHtml}
                  ${asesorHtml}
                  ${sirveHtml}
                </ul>`;

    parentElement.append(this.element);
  }
}
export default Overlay;
