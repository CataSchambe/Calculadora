function insert(value) {
    let display = document.getElementById("display");
    if (value === 'pi') {
        display.value += Math.PI;
    } else if (value === 'e') {
        display.value += Math.E;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display").value;
    display = display.replace(/\^/g, '**'); // Reemplazar ^ por ** para potencias
    try {
        document.getElementById("display").value = eval(display);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
