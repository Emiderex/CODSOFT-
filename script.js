
function appendToDisplay(value) {
   const display = document.getElementById('display');
   if (display.value === '0' || display.value === 'Error') {
    display.value = value;
   } else {
    display.value += value;
   }
  }

  function clearDisplay() {
    document.getElementById('display').value = '0';
  }

  function calculate() {
    try {
      const result = new Function('return ' + document.getElementById('display').value)();
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function operate(operator) {
    document.getElementById('display').value += operator;
  }