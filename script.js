function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    taskList.appendChild(taskItem);

    taskInput.value = "";
}

