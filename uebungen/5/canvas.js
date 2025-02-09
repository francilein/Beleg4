function initCanvas() {
    // Canvas 1: Roter Hintergrund
    let canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Canvas 2: Text anzeigen
    let textCanvas = document.getElementById("textCanvas");
    if (textCanvas.getContext) {
        let textCtx = textCanvas.getContext("2d");
        textCtx.font = "30px Arial";
        textCtx.fillText("This is a long text that will exceed the canvas boundaries", 10, 50);
    }
    
    // Canvas 3: Blaues Rechteck und Text
    let meinCanvas = document.getElementById("meinCanvas");
    if (meinCanvas.getContext) {
        let meinCtx = meinCanvas.getContext("2d");
        meinCtx.fillStyle = "blue";
        meinCtx.fillRect(50, 50, 200, 150);
        meinCtx.fillStyle = "white";
        meinCtx.font = "20px Arial";
        meinCtx.fillText("Hallo, Canvas!", 100, 100);
    }
    
    // Canvas 4: Bild mit Herzchen und Animation
    let drittesCanvas = document.getElementById("drittesCanvas");
    if (drittesCanvas.getContext) {
        let ctx = drittesCanvas.getContext("2d");
        ctx.fillStyle = "lightblue";
        ctx.fillRect(50, 50, 200, 150);
        ctx.beginPath();
        ctx.arc(250, 150, 40, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
        
        // HTMLImageElement erzeugen und zeichnen
        let img = new Image();
        img.onload = function() {
            // Zeichne das Bild als Hintergrund
            ctx.drawImage(img, 0, 0, drittesCanvas.width, drittesCanvas.height);
            
            // Zeichne ein Herzchen auf das Canvas
            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.bezierCurveTo(150, 170, 120, 150, 100, 150);
            ctx.bezierCurveTo(60, 150, 60, 200, 60, 200);
            ctx.bezierCurveTo(60, 230, 90, 260, 150, 300);
            ctx.bezierCurveTo(210, 260, 240, 230, 240, 200);
            ctx.bezierCurveTo(240, 200, 240, 150, 200, 150);
            ctx.bezierCurveTo(180, 150, 150, 170, 150, 200);
            ctx.fill();
        };
        img.src = 'sarah.webp'; // Bildquelle auf 'sarah.webp' setzen
    }

    // Canvas 5: Ball-Animation hinzufügen
    let animationCanvas = document.getElementById("animationcanvas");
    if (animationCanvas.getContext) {
        let ctx = animationCanvas.getContext("2d");

        // Startposition und Geschwindigkeit des Kreises
        let x = animationCanvas.width / 2;
        let y = animationCanvas.height - 30;
        let dx = 2;
        let dy = -2;
        const ballRadius = 10;

        // Funktion zum Zeichnen des Kreises
        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        // Animationsfunktion
        function draw() {
            ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height); // Canvas löschen
            drawBall(); // Ball zeichnen

            // Ballbewegung
            x += dx;
            y += dy;

            // Randüberprüfung für horizontale Bewegungen
            if (x + dx > animationCanvas.width - ballRadius || x + dx < ballRadius) {
                dx = -dx; // Richtung umkehren
            }

            // Randüberprüfung für vertikale Bewegungen
            if (y + dy > animationCanvas.height - ballRadius || y + dy < ballRadius) {
                dy = -dy; // Richtung umkehren
            }

            // Die nächste Frame-Animation anfordern
            requestAnimationFrame(draw);
        }

        // Initialisierung der Animation
        draw();
    }
}

window.onload = initCanvas;
