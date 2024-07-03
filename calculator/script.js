
document.addEventListener('DOMContentLoaded', function() {
    let currentInput = '';
    let previousInput = '';
    let operation = null;

    function appendValue(value) {
        if (value === '.' && currentInput.includes('.')) return;
        currentInput = currentInput === '0' ? value : currentInput + value;
        updateDisplay(currentInput);
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operation = null;
        updateDisplay('0');
    }

    function deleteLast() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput || '0');
    }

    function setOperation(op) {
        if (currentInput === '') return;
        if (previousInput !== '') calculateResult();
        operation = op;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculateResult() {
        if (currentInput === '' || previousInput === '') return;

        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        let result;
        switch(operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }

        currentInput = result;
        previousInput = '';
        operation = null;
        updateDisplay(currentInput);
    }

    function updateDisplay(value) {
        document.getElementById('display').value = value;
    }

    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.setOperation = setOperation;
    window.calculateResult = calculateResult;
});

