class CardSubtext {
  element;
  constructor(character, parentElement) {
    this.element = document.createElement("div");
    this.element.className = "character__info";
    this.element.innerHTML = `<ul class="list-unstyled">
                  <li>Edad: ${character.edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>`;
    parentElement.append(this.element);
  }
}
export default CardSubtext;
