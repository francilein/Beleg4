document.getElementById("kitty").addEventListener("click", function() {
    var bild = document.getElementById("bild");
    if (bild.style.display === "none") {
        bild.style.display = "block";
    } else {
        bild.style.display = "none";
    }
});