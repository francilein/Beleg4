// worker.js
onmessage = function(e) {
    let bigNumber = 1e+100; // Große Zahl
    let countdown = 10; // Beispiel: 10 Sekunden Countdown
    let interval = setInterval(() => {
        countdown--;
        postMessage({ countdown });

        if (countdown <= 0) {
            clearInterval(interval);
            bigNumber *= 1.0001; // Beispielberechnung
            postMessage({ result: bigNumber.toExponential() }); // Berechnung abgeschlossen
        }
    }, 1000);
}
