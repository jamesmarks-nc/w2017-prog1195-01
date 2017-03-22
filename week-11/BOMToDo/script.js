

//TODO: Use BOM objects to get form inputs
var form = document.forms[0];
var toDoTextbox = form.elements["txtToDo"];
var addButton = form.elements["addButton"];

// Add click handler to form button.
//addButton.onclick = addTodo;
addButton.addEventListener('click', addTodo);

var outputList = document.getElementById("todoList");

var toDoList = [ 
  { description: "Take out trash", done: true },
  { description: "Do laundry", done: false },
];
listToDos();

function addTodo() {
  
  //TODO: Ensure text box has some kind of value.

  toDoList.push({
    description: toDoTextbox.value,
    done: false,
  });

  toDoTextbox.value = ""; // Clear textbox.

  console.log("Added new todo: " + toDoTextbox.value);
  listToDos();

}

// TODO: Complete this method.
function listToDos() {

  // clear all todos in the list to start fresh.
  outputList.innerHTML = '';

  for (var i = 0; i < toDoList.length; i++) {
    // Get a reference to the array element and update the code below.

    // make new HTML element to display todo info
    var newListItem = document.createElement("li");
    // update it's text to show the todo description.
    newListItem.innerText = toDoList[i].description;
    // make sure that if it is complete, this is displayed. (I'll use a CSS class to keep it simpler.)
    if(toDoList[i].done) {
      newListItem.className = 'done';
    }

    // add the new todo item to the parent ToDo list UL element on the page.
    outputList.appendChild(newListItem);

    // also hook it to a "toggleComplete" method
    newListItem.addEventListener('click', toggleComplete);
    // or ... newListItem.onclick = toggleComplete;
  }

}

// TODO: write the below methods

function toggleComplete() {
  var clickedElement = this;
  // to update the todo list we will use a loop to find matching text
  var listItems = document.getElementsByTagName("li");

  for(var i = 0; i < listItems.length; i++) {
    if(listItems[i] === clickedElement) {
      toDoList[i].done = !toDoList[i].done;
    }
  }

  listToDos();

}

function clearDone() {
  // Create a new placeholder list to hold "unfinished items"
  var newList = new Array();
  // Loop through our current list, only adding "unfinished items" to the new List
  for(var i = 0; i < toDoList.length; i++) {
    if(toDoList[i].done !== true) {
      newList.push(toDoList[i]);
    }
  }
  // all we have left is unfinished stuff
  // so replace the old list with the new list of only unfinished stuff.
  toDoList = newList;
  
  listToDos();
}