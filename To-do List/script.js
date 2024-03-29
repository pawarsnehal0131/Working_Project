// This function is called when the "Add Task" button is clicked.
function addTask() {
    // Get references to the input field and the task list.
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Check if the input is empty or contains only spaces.
    if (taskInput.value.trim() === "") {
        // If empty, show an alert and return from the function.
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (<li>) element.
    var li = document.createElement("li");

    // Set the text content of the list item to the value of the input field.
    li.textContent = taskInput.value;

    // Create a "Delete" button.
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Attach an event handler to the "Delete" button.
    deleteButton.onclick = function () {
        // Remove the corresponding list item when the "Delete" button is clicked.
        taskList.removeChild(li);
    };

    // Append the "Delete" button to the list item.
    li.appendChild(deleteButton);

    // Append the list item to the task list.
    taskList.appendChild(li);

    // Clear the input field after adding a task.
    taskInput.value = "";
}
