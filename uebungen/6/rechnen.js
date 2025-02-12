self.onmessage = function(event) {
    if (event.data === "start") {
        let summe = 0;
        for (let i = 0; i < 100000000; i++) { // Reduzierte Anzahl für schnelleres Testen
            summe += i * i + Math.random();
        }
        postMessage(summe); // Sendet das Ergebnis zurück
    } else {
        postMessage("Unbekannter Befehl erhalten: " + event.data);
    }
};
