self.onmessage = function(event) {
    var array = event.data;
    var n = array.length;

    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            var temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
        // Fortschritt zurückmelden (optional)
        if (i % 100 === 0) {
            self.postMessage({ progress: (i / n) * 100 });
        }
    }

    // Sortiertes Array zurücksenden
    self.postMessage({ progress: 100, result: array });
    self.close();
};