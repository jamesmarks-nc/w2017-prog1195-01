function btnTotal_onclick()
{
	// assign textbox elements to variables for easier access
	var subtotalTextbox = document.getElementById("txtSubtotal");
	var taxRateTextbox = document.getElementById("txtTaxRate");
	var totalTextbox = document.getElementById("txtTotal");
	
	var sub = parseFloat(subtotalTextbox.value);
	var rate = parseFloat(taxRateTextbox.value) / 100;

	var newTotal = calcTotal(sub, rate);

	totalTextbox.value = newTotal;
	
}

function calcTotal(subTotal, taxRate) {

		// var taxAmount = subTotal * taxRate;
		// var newTotal = subTotal + taxAmount;

		// return newTotal;

		return subTotal + (subTotal * taxRate);

}