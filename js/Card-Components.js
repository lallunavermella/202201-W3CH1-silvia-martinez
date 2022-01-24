class Card {
  element;

  constructor(parentElement) {
    this.element = document.createElement("li");
    this.element.className = "character col";
    this.element.innerHTML = `<div class="card character__card"></div>`;

    parentElement.append(this.element);
  }
}
export default Card;
