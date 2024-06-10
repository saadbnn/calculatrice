function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (display.value.includes('/0')) {
            throw new Error('Division par zéro');
        }
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erreur Maths';
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}
