var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var box = document.querySelector("ul");
var btn = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Creates a checkbox that toogles a css class(it this case it lines-through)
	var box = document.createElement("input");
	box.setAttribute("type", "checkbox");
	li.appendChild(box);

	// Creates a Button that deletes the li element
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);

	// after the button is clicked the deleteElement function will be called and remove the parent element of the button in this case the li.
	btn.addEventListener('click', deleteElement);

	// after the checkbox is clicked the toggleClass function will be called
	box.addEventListener('click', toggleClass);

	// toogles the class(done) of the li element
	function toggleClass() {
		li.classList.toggle("done");
	}
}

// deletes the parent element
function deleteElement() {
	event.target.parentElement.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
