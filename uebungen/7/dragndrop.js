document.addEventListener("DOMContentLoaded", () => {
    const taskText = document.getElementById("taskText");
    const taskColor = document.getElementById("taskColor");
    const addTaskButton = document.getElementById("addTask");
    const dropzones = document.querySelectorAll(".dropzone");
    const image = document.getElementById("image");

    addTaskButton.addEventListener("click", () => {
        if (taskText.value.trim() === "") return;
        
        const task = document.createElement("div");
        task.classList.add("task");
        task.textContent = taskText.value;
        task.style.backgroundColor = taskColor.value;
        task.style.color = taskColor.value.toLowerCase() === "#000000" ? "white" : "black";
        task.setAttribute("draggable", "true");
        task.addEventListener("dragstart", dragStart);
        
        const editButton = document.createElement("button");
        editButton.textContent = "✎";
        editButton.addEventListener("click", () => editTask(task));
        task.appendChild(editButton);
        
        document.getElementById("todo").appendChild(task);
        taskText.value = "";
    });

    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
        event.target.classList.add("dragging");
    }
    
    dropzones.forEach(zone => {
        zone.addEventListener("dragover", event => {
            event.preventDefault();
            zone.classList.add("over");
        });
        
        zone.addEventListener("dragleave", () => {
            zone.classList.remove("over");
        });
        
        zone.addEventListener("drop", event => {
            event.preventDefault();
            const draggedElement = document.querySelector(".dragging");
            if (zone.id === "trash") {
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "🗑";
                deleteButton.addEventListener("click", () => draggedElement.remove());
                draggedElement.appendChild(deleteButton);
                zone.appendChild(draggedElement);
            } else {
                zone.appendChild(draggedElement);
                if (zone.id === "done") {
                    draggedElement.style.textDecoration = "line-through";
                    draggedElement.style.opacity = "0.5";
                } else {
                    draggedElement.style.textDecoration = "none";
                    draggedElement.style.opacity = "1";
                }
            }
            draggedElement.classList.remove("dragging");
            zone.classList.remove("over");
        });
    });
    
    function editTask(task) {
        const newText = prompt("Neue Aufgabe eingeben:", task.firstChild.textContent);
        if (newText) task.firstChild.textContent = newText;
    }

    if (image) {
        image.setAttribute("draggable", "true");
        image.addEventListener("dragstart", event => {
            event.dataTransfer.setData("text/plain", event.target.id);
            event.target.classList.add("dragging");
        });
        
        image.addEventListener("dragend", event => {
            event.target.classList.remove("dragging");
        });
    }
});
