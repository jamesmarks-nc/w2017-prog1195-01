var calcState = {
  previousValue: null,
  activeOperation: null,
}

var txtNumber = document.getElementById("currentNumber");

function handleDigitClick(digit) {
    // but if my number on the screen is currently 0 erase it first.
    if(txtNumber.value === '0') txtNumber.value = '';
    txtNumber.value += digit;
}

function handleDotClick() {
  if(txtNumber.value.indexOf('.') === -1) {
    txtNumber.value += '.';
  }
}

function handlePrevious() {
  if(calcState.previousValue !== null && calcState.activeOperation !== null) {
    var operation = calcState.previousValue + calcState.activeOperation + number
    calcState.previousValue = eval(operation);
    document.getElementById('peek').innerText = operation + "=" + calcState.previousValue;
  } else {
    calcState.previousValue = number;
  }
  txtNumber.value = "0";
}

function handleEqualButton() {
  if(operator === '=') {
    txtNumber.value = calcState.previousValue;
    calcState.previousValue = null;
    calcState.activeOperation = null;
  } else {
    calcState.activeOperation = operator;
  }
}

function handleOperatorClick(operator) {
  // get the currently displayed number
  var number = parseFloat(txtNumber.value);
  // take care of any operations in the queue.
  handlePrevious();
  // if this is the equals operator -> display the result.
  handleEqualButton(operator);
}