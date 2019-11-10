var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.querySelector("ul");
var btnDel = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Creates a Button that toogles a css class(it this case it lines-through)
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Done!"));
	li.appendChild(btn);

	// Creates a Button that deletes the li element
	var btnDel = document.createElement("button");
	btnDel.appendChild(document.createTextNode("Delete"));
	li.appendChild(btnDel);

	// after the button is clicked the deleteElement function will be called and remove the parent element of the button in this case the li.
	btnDel.addEventListener('click', deleteElement);

	// after li element is clicked the toggleClass function will be called
	btn.addEventListener('click', toggleClass);

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
