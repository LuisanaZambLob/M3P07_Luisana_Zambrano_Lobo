let coins = 50;
let randomNumberHistory = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function play() {
    const numeroApuesta = parseInt(document.getElementById('numeroApuesta').value);
    const cantidadApostar = parseInt(document.getElementById('cantidadApostar').value);

    if (numeroApuesta < 1 || numeroApuesta > 6) {
        alert("Elige un número entre 1 y 6.");
        return;
    }

    if (cantidadApostar < 1) {
        alert("La apuesta mínima es 1 moneda.");
        return;
    }

    if (cantidadApostar > coins) {
        alert("No tienes suficientes monedas para apostar esa cantidad.");
        return;
    }

    const diceRoll = getRandomInt(1, 7);
    randomNumberHistory.push(diceRoll);

    const numeroList = document.getElementById('numeroList');
    const newNumeroItem = document.createElement('li');
    newNumeroItem.textContent = `Número obtenido: ${diceRoll}`;
    numeroList.appendChild(newNumeroItem);

    if (diceRoll === numeroApuesta) {
        coins += cantidadApostar;
        alert(`¡Ganaste ${cantidadApostar} monedas! Ahora tienes ${coins} monedas.`);
    } else {
        coins -= cantidadApostar;
        alert(`¡Perdiste ${cantidadApostar} monedas! Ahora tienes ${coins} monedas.`);

        if (coins <= 0) {
            alert("Game Over");
            disableInputs();
            printAllNumbers();
        }
    }

    if (coins >= 100) {
        alert("¡Enhorabuena! ¡Has ganado el juego!");
        disableInputs();
        printAllNumbers();
    }
}

function disableInputs() {
    document.getElementById('numeroApuesta').disabled = true;
    document.getElementById('cantidadApostar').disabled = true;
}

function printAllNumbers() {
    console.log("Números aleatorios obtenidos:");
    console.log(randomNumberHistory);
}
