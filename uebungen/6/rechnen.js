// Funktion zum Quadrieren einer Zahl
function squareNumber(number) {
    return number * number;
}

// Funktion zum Starten der Berechnung mit einer großen Zahl
function startCalculation() {
    let bigNumber = 1e+100; // Große Zahl
    document.getElementById('bigNumber').innerText = `Startwert: ${bigNumber}`;

    // Countdown initialisieren
    let countdown = 10; // Beispiel: 10 Sekunden Countdown
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = `Berechnung läuft... Zeit verbleibend: ${countdown} Sekunden`;

    // Countdown-Logik
    let countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.innerText = `Berechnung läuft... Zeit verbleibend: ${countdown} Sekunden`;

        if (countdown <= 0) {
            clearInterval(countdownInterval); // Countdown stoppen, wenn Zeit abgelaufen ist
        }
    }, 1000); // Jede Sekunde wird der Countdown reduziert

    // Hier kannst du Berechnungen durchführen (z. B. Multiplikation der Zahl)
    setTimeout(() => {
        // Beispiel einer komplexeren Berechnung (hier nur ein Multiplikationsbeispiel)
        bigNumber *= 1.0001;
        document.getElementById('output').innerText = `Berechnung abgeschlossen! Endwert: ${bigNumber.toExponential()}`;
        clearInterval(countdownInterval); // Countdown stoppen
    }, 10000); // Berechnung nach 10 Sekunden
}

// Funktion zum Verarbeiten der Benutzereingabe und Quadrieren der Zahl
function processInput() {
    let input = document.getElementById('userInput').value; // Wert aus dem Eingabefeld holen
    let number = parseFloat(input); // Umwandeln in eine Zahl

    if (isNaN(number)) {
        document.getElementById('inputResult').innerText = "Bitte gib eine gültige Zahl ein!";
        return;
    }

    // Das Quadrat der Zahl berechnen
    let result = squareNumber(number);
    document.getElementById('inputResult').innerText = `Das Quadrat der Zahl ist: ${result}`;
}
