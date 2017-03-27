function btnSearch_onclick()
{
	// assign textbox elements to variables for easier access
	var searchTextbox = document.getElementById("txtCode");
	var resultTextbox = document.getElementById("txtResult");

	var numFound = getCountryCount(searchTextbox.value);

	resultTextbox.value = numFound;
	
}

function getCountryCount(searchText) {

	var countries = [ 
		"Iceland", "India", "Greenland",  "Canada", 
		"Australia", "Columbia", "England"
	];

	var counter = 0;

	for(var i = 0; i < countries.length; i++) {
		var currentCountry = countries[i];
		if(currentCountry.indexOf(searchText) !== -1) {
			counter = counter + 1;
		}
	}

	return counter;

}
