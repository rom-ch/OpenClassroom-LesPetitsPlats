document.addEventListener("click", e => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
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
});

const items = document.querySelectorAll(".list li a");

items.forEach(item => {
	item.addEventListener("click", e => {
		e.preventDefault();
		const html = `
			<li class="list-item">
				<a href="#">
					<span>${item.innerText}</span>
					<i class="fa-solid fa-xmark"></i>
				</a>
			</li>
		`;
		item.parentElement.parentElement.previousElementSibling.innerHTML +=
			html;
	});
});
