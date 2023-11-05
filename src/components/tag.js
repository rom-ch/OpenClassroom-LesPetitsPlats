export default class Tag {
  constructor(tag) {
    this.tag = tag;
    this.element = this.buildDOM(this.tag);
  }

  buildDOM(tag) {
    const tagsSection = document.querySelector(".tags");
    const dom = document.createElement("div");
    dom.classList.add("tag");
    dom.innerHTML = `
      <span>${tag}</span>
      <span><i class="fa-solid fa-x"></i></span>
    `;

    tagsSection.appendChild(dom);

    dom.querySelector(".fa-x").addEventListener("click", () => {
      tagsSection.removeChild(dom);
    });
    return dom;
  }
}
