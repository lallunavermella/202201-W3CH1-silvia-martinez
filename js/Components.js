class Component {
  element;

  constructor(parentElement, htmlTag, className) {
    this.element = document.createElement(htmlTag);
    this.element.classList = className;

    parentElement.append(this.element);
  }
}

export default Component;
