class CardText {
  element;
  constructor(parentElement, name, family) {
    this.element = document.createElement("h2");
    this.element.className = "haracter__name card-title";
    this.element.innerHTML = `${name} y ${family}
              <div class="character__info">`;

    parentElement.append(this.element);
  }
}

export default CardText;
