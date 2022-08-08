const form = document.querySelector("#form");
const input = document.querySelector("#input");
const error = document.querySelector("#error");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const email = formData.get("email");
	const regex = /^\w+@\w+.\w+$/i;
	if (regex.test(email)) {
		form.reset();
	} else {
		error.removeAttribute("hidden");
	}
});

input.addEventListener("keydown", () => {
	if (!error.getAttribute("hidden")) {
		error.setAttribute("hidden", true);
	}
});
