
var myArray = [];

function doSomething() {
	var numberTextbox = 
		document.getElementById("txtNumber");

	var number = parseFloat(numberTextbox.value);
	
	myArray.push(number);

	console.log(myArray);


}