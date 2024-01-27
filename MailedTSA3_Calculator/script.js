let display = document.getElementById('display');

function appendToDisplay(value) {
display.value += value;
}

function clearDisplay() {
display.value = '';
}

function calculateResult() {
try {
display.value = eval(display.value);
} catch {
display.value = 'Error';
}
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  var result = eval(document.getElementById('display').value);
  document.getElementById('display').value = result;
}

function powerOff() {
  document.getElementById('display').value = '';
}

let powerOn = true; // Initial power state

function clearDisplay() {
  if (powerOn) {
    document.getElementById('display').value = '';
  }
}

function appendToDisplay(value) {
  if (powerOn) {
    document.getElementById('display').value += value;
  }
}

function calculateResult() {
  if (powerOn) {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }
}

function powerOff() {
  powerOn = !powerOn; // Toggle power state
  document.getElementById('display').value = ''; // Clear the display
}