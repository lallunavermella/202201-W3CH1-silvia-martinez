class Card {
  element;

  constructor(parentElement, image, nombre, familia) {
    this.element = document.createElement("li");
    this.element.className = "character col";
    this.element.innerHTML = `<div class="card character__card">
    <img
              src=${image}
              alt="${nombre} y ${familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body-bod">`;

    parentElement.append(this.element);
  }
}
export default Card;
