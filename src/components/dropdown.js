export default class Dropdown {
  constructor(name) {
    this.element = this.buildDOM(name);
  }

  init(list) {
    this.addListItems(list);
  }

  openDropdown(e) {
    e.preventDefault();
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
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

  buildDOM(name) {
    const filtersSection = document.querySelector(".filters");
    const dom = document.createElement("div");
    dom.classList.add("dropdown");
    dom.setAttribute("data-dropdown", "");
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
    document.addEventListener("click", this.openDropdown.bind(this));
    return dom;
  }
}
