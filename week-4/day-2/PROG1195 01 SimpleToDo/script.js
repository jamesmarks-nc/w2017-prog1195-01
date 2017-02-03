
var outputTextbox = document.getElementById("txtOutput");
var toDoTextbox = document.getElementById('txtToDo');
var completeTextbox = document.getElementById('txtComplete');


var toDoList = [ "Take out trash", "Do laundry" ];
var toDoDone = [ true, false ];

function addTodo() {
 
	var userInput = toDoTextbox.value;

	toDoList[toDoList.length] = userInput;
	toDoDone[toDoDone.length] = false;

	listToDos();
 
}

function markComplete() {

	var completeInput = completeTextbox.value;

	var i = 0; // Initialize

	while (i < toDoList.length) { // Test

		if(toDoList[i] === completeInput) {
			toDoDone[i] = true;
			break; // Exit the loop.
		}

		i++; // Increment / "change"
	}
 
}

function listToDos() {

	outputTextbox.value = "";

	for (var i = 0; i < toDoList.length; i += 1) {

		// TODO: Show ternary operator.
		var done = "[Incomplete]";

		if(toDoDone[i] === true) {
			done = "[Finished]";
		}

		// Add todo item to output textbox.
		outputTextbox.value += toDoList[i]
							+ ' ' + done + '\n';
	}
 
}


function clearDone() {

	// This is last... above and beyond
	// TODO: Record completion for PROG1195 02

}

function quickSort() {

	// create a temporary array to hold the new order
	var tempArray = [];
	var tempDone = [];

	for (var i = 0; i < toDoList.length; i++) {
		if(toDoDone[i] === true) {
			tempArray[tempArray.length] = toDoList[i];
			tempDone[tempDone.length] = toDoDone[i];
		}
	}

	for (var count = 0; count < toDoList.length; count++) {
		if(toDoDone[count] === false) {
			tempArray[tempArray.length] = toDoList[count];
			tempDone[tempDone.length] = toDoDone[count];
		}
	}

	toDoList = tempArray;
	toDoDone = tempDone;

}














