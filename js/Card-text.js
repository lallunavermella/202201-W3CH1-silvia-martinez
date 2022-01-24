class CardText {
  element;
  constructor(parentElement, name, family) {
    this.element = document.createElement("h2");
    this.element.className = "character__name card-title h4";
    this.element.innerHTML = `${name}  ${family}`;

    parentElement.append(this.element);
  }
}

export default CardText;
