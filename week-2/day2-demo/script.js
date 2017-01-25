
/* 
James Marks
Demo File: Working with multi-dimensional arrays.
2016-01-18
*/


var nameTextbox = document.getElementById("txtName");
var streetTextbox = document.getElementById("txtStreet");
var cityTextbox = document.getElementById("txtCity");
var ageTextbox = document.getElementById("txtAge");

var names = ['Mickey Mouse', 'Donald Duck', 'Bugs Bunny'];
var addresses = ['123 Fantasy Way', '555 Quack Street', '567 Carrot Street'];
var cities = ['Anaheim','Mallard','Rascal'];
var ages = [73, 65, 58];

function findInfo() {
	
	// Getting user input.
	var inputName = nameTextbox.value;
	// Where in the array is the user's input name?
	var index = names.indexOf(inputName);
	// Get information about this name
	var address = addresses[index];
	var city = cities[index];
	var age = ages[index];

	streetTextbox.value = address;
	cityTextbox.value = city;
	ageTextbox.value = age.toString();

}

function sumAllAges() {

	// variable to keep track of total
	var sum = 0;

	// loop through array adding the current age.
	for(var i = 0; i < ages.length; i = i + 1) {
		sum = sum + ages[i];
	}

	alert("Total years (of experience): " + sum.toString());

}

function addCharacter() {

	// Get input
	var newName = nameTextbox.value;
	var newAddress = streetTextbox.value;
	var newCity = cityTextbox.value;
	var newAge = parseInt(ageTextbox.value);

	// add information to the end of arrays.
	names.push(newName);
	addresses.push(newAddress);
	cities.push(newCity);
	ages.push(newAge);

}

















