var workingDate = new Date();

var currentDateTextbox = document.getElementById('currentDate');

function displayDate() {
  currentDateTextbox.value = workingDate.toDateString() 
    + ' ' + workingDate.getHours()
    + ":" + workingDate.getMinutes();
}

function increaseYear() {
  var year = workingDate.getFullYear();
  year = year + 1;
  workingDate.setFullYear(year);
  displayDate();
}

function decreaseYear() {
  var year = workingDate.getFullYear();
  year = year - 1;
  workingDate.setFullYear(year);
  displayDate();
}

function increaseMonth() {
  workingDate.setMonth(workingDate.getMonth() + 1);
  displayDate();
}

function decreaseMonth() {
  var month = workingDate.getMonth();
  month = month - 1;
  workingDate.setMonth(month);
}