document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const summary = document.getElementById("summary");
    const summaryContent = document.getElementById("summaryContent");
    let startTime;
    let fieldFocusTimes = {};
    let formCompletionTime;

    form.addEventListener("focusin", (event) => {
        if (!startTime) startTime = Date.now();
        if (!fieldFocusTimes[event.target.name]) {
            fieldFocusTimes[event.target.name] = Date.now();
        }
        console.log(`Focus auf: ${event.target.name} um ${new Date().toLocaleTimeString()}`);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let valid = true;
        const inputs = form.querySelectorAll("input, select");
        
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                valid = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });
        
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (password !== confirmPassword) {
            valid = false;
            document.getElementById("confirmPassword").classList.add("is-invalid");
        }
        
        if (valid) {
            formCompletionTime = Date.now() - startTime;
            console.log("Formular abgeschickt. Dauer: " + formCompletionTime / 1000 + " Sekunden");
            
            const formData = new FormData(form);
            let output = "<ul>";
            for (let [key, value] of formData.entries()) {
                if (key !== "password" && key !== "confirmPassword") {
                    output += `<li><strong>${key}:</strong> ${value}</li>`;
                }
            }
            output += "</ul>";
            summaryContent.innerHTML = output;
            summary.classList.remove("d-none");
        }
    });

    form.addEventListener("reset", function () {
        summary.classList.add("d-none");
        summaryContent.innerHTML = "";
        startTime = null;
        fieldFocusTimes = {};
        console.log("Formular zurückgesetzt.");
    });
});