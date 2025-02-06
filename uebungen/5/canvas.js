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

    // Additional canvas code
    var meinCanvas = document.getElementById('meinCanvas');
    var meinCtx = meinCanvas.getContext('2d');

    // Rechteck zeichnen
    meinCtx.fillStyle = 'blue';
    meinCtx.fillRect(50, 50, 200, 150);

    // Text hinzufügen
    meinCtx.fillStyle = 'white';
    meinCtx.font = '20px Arial';
    meinCtx.fillText('Hallo, Canvas!', 100, 100);

    // HTMLImageElement erzeugen
    var img = new Image();
    img.src = 'https://via.placeholder.com/150';
    img.onload = function() {
        meinCtx.drawImage(img, 100, 200, 150, 150);

        // Setzen der Quelle für das Element auf das von Ihnen in 3.1 gezeichnete Element
        var newImg = new Image();
        newImg.src = canvas.toDataURL();
        newImg.onload = function() {
            document.body.appendChild(newImg);
        };
    };
};