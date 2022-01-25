import Components from "./Components.js";

class PageComponent extends Components {
  constructor(parentElement, htmlTag, className) {
    super(parentElement, "div", className);

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<div class="app container">
      <ul class="characters-list row list-unstyled">
                </ul> 
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
            <i class="emoji"></i>
          </div> 
        </li>
      </ul>
    </div>
    <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img
        class="comunications__picture"
        src="img/no-one.jpg"
        alt="Nombre y familia del que habla"
      />
    </div>`;
  }
}

export default PageComponent;
