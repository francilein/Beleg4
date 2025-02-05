
window.onload = function() {
    // Existing canvas code
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // New canvas code
    var textCanvas = document.getElementById('textCanvas');
    var textCtx = textCanvas.getContext('2d');
    textCtx.font = '30px Arial';
    textCtx.fillText('This is a long text that will exceed the canvas boundaries', 10, 50);
};
const canvas = document.getElementById('meinCanvas');
    const ctx = canvas.getContext('2d');

    // Rechteck zeichnen
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 200, 150);

    // Text hinzufügen
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Hallo, Canvas!', 100, 100);