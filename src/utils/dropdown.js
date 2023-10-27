export default class Dropdown {
  constructor(name) {
    this.element = this.buildDOM(name);
  }

  init(list) {
    this.addListItems(list);
    this.selectItem();
    this.removeItem();
  }

  openDropdown(e) {
    e.preventDefault();
    this.element.classList.toggle("active");
  }

  addListItems(list) {
    const ul = this.element.querySelector(".list");
    ul.innerHTML = "";
    list.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("list-item");
      li.innerHTML = `
        <a href="#">${item}</a>
      `;
      ul.appendChild(li);
    });
  }

  selectItem() {
    const items = this.element.querySelectorAll(".list li a");
    items.forEach(item => {
      item.addEventListener("click", e => {
        e.preventDefault();
        const li = document.createElement("li");
        li.classList.add("list-item");
        li.innerHTML = `
          <span>${item.innerText}</span>
          <i class="fa-solid fa-xmark"></i>
        `;
        this.element.querySelector(".added-items").appendChild(li);
      });
    });
  }

  removeItem() {
    const menu = this.element.querySelector(".dropdown-menu");
    menu.addEventListener("click", e => {
      e.preventDefault();
      if (e.target.matches(".fa-xmark")) {
        e.target.parentElement.remove();
      }
    });
  }

  buildDOM(name) {
    const filtersSection = document.querySelector(".filters");
    const dom = document.createElement("div");
    dom.classList.add("dropdown");
    dom.innerHTML = `
    <button class="link" data-dropdown-button>
    <span>${name}</span>
    <svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L7.5 1L14 7"
        stroke="#1B1B1B"
        stroke-linecap="round"
      />
    </svg>
  </button>
  <div class="dropdown-menu">
    <form class="select" action="#">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="9.5" stroke="white" />
        <line
          x1="18.3536"
          y1="18.6464"
          x2="27.3536"
          y2="27.6464"
          stroke="white"
        />
      </svg>
      <input type="text" />
    </form>
    <ul class="added-items"></ul>
    <ul class="list"></ul>
  </div>
    `;

    filtersSection.appendChild(dom);
    dom.addEventListener("click", this.openDropdown.bind(this));
    return dom;
  }
}
