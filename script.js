var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Creates a Button next to the li element each time a li element is created
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Done!"));
	li.appendChild(btn);

	// after the button is clicked the deleteElement function will be called and remove the parent element of the button in this case the li.
	btn.addEventListener('click', deleteElement);

	// after li element is clicked the toggleClass function will be called
	li.addEventListener('click', toggleClass);

	// toogle the class(done) of the li element
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