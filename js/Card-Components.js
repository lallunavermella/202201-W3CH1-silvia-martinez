class Card {
  element;
  div;
  body;

  constructor(parentElement, nombre, familia) {
    this.element = document.createElement("li");
    this.element.className = `character col ${nombre}`;
    this.div = document.createElement("div");
    this.div.className = "card character__card";
    this.div.innerHTML = `<img
              src="./img/${nombre.toLowerCase()}.jpg"
              alt="${nombre} y ${familia}"
              class="character__picture card-img-top"/>
              </div>`;
    this.body = document.createElement("div");
    this.body.className = "card-body";

    parentElement.append(this.element);
    this.element.append(this.div);
    this.div.append(this.body);
  }
}
export default Card;
