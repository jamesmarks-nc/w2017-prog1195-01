
// Note: index.html would have loaded department-employee.js first
  // we are going to use the arrays from that script file just like a database

// 1. Say Hello! (We'll do this together.)
// Output a welcome message for each employee in our database:
// Example:
//     Welcome to the Office Jimmi.

// Initialize, Test, Inrcrement
for(var i = 0; i < employees.length; i++) {
	// Store current employee in a variable.
	var curEmp = employees[i];
	var fullName = curEmp.firstName + ' ' + curEmp.lastName
	console.log("Welcome to the Office " + fullName);
}


// 2. Information Systems Debacle: (Your turn.)
// For employees that work in the ISYS department (use deptCode)
// Output their name, title and salary.
// BONUS: Keep track of total salary and output that at the end.

// while loop (through employees)
	// only output name, title and salary for .deptCode = ISYS

var i = 0; // Initialize
while(i < employees.length) { //Test
	var currEmp = employees[i]; //Track current employee

	if(currEmp.deptCode === "ISYS") { // Are they in ISYS?
		console.log(currEmp.firstName, currEmp.lastName, currEmp.title, currEmp.salary);
	}

	i = i + 1; //Increment
}

// Aside... While we're at it, lets learn a **bad** way to write conditionals.


// 3. Bullets:
// Using the boilerplate code provided (in-class), change the code 
// to output a block of data about each of our departments.

for(var i = 0; i < departments.length; i++) {

	var dept = departments[i];

	// replace ALL tokens in square brackets
	document.write("<h1>" + dept.name + "</h1>");
	document.write("<ul>");
	document.write("<li>" + dept.code + "</li>");
	document.write("<li>" + dept.budget + "</li>");
	document.write("</ul>");
}










// 4. Disfunctions

// 4a.
// Lets write our first "pure" function.
// if y = x + 3; Solve for y

function myFunction(x) {

	var y = x + 3;

	return y;
}



// 4b.
// if y = mx + b, write a function that will solve for y given m, x, and b

function slopeY(m, x, b) {

	var y = (m * x) + b;

	return y;
}

function sayHello(name) {
	return "Hello " + name;
}

function elementAt(array, i) {
	return array[i];
}












