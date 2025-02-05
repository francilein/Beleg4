var myElement;

document.addEventListener("DOMContentLoaded", function () {
    myElement = document.getElementById("textElement");

    myElement.addEventListener("click", changeText);

    document.getElementById("submitButton").addEventListener("click", function() {
        const nameInput = document.getElementById("textInput").value;
        const ageInput = document.getElementById("numberInput").value;

        if (nameInput.trim() === "" || ageInput.trim() === "" || isNaN(ageInput)) {
            alert("Bitte einen gültigen Namen und ein Alter eingeben!");
            return;
        }

        const newPerson = new Person(nameInput, parseInt(ageInput));

        const outputParagraph = document.getElementById("outputParagraph");
        outputParagraph.textContent = `\nName: ${newPerson.getName()} Age: ${newPerson.getAge()}`;
    });
});

function changeText() {
    myElement.textContent = "I've got issues";
}

class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }
}

function slay() {
    const imageElement = document.getElementById("mumsyImage"); // Corrected capitalization
    if (imageElement.style.display === "none") {
        imageElement.style.display = "block";
    } else {
        imageElement.style.display = "none";
    }
}