function appendToDisplay(value) {
    document.querySelector('.display').value += value;
}

function clearDisplay() {
    document.querySelector('.display').value = '';
}

function deleteLast() {
    const display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const display = document.querySelector('.display');
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
