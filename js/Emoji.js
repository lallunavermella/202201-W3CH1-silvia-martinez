class Emoji {
  element;
  constructor(character, parentElement) {
    this.element = document.createElement("i");
    this.element.className = "emoji";
    this.element.innerHTML = "👑";
    parentElement.append(this.element);
  }
}

export default Emoji;
