document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task."); // Notify the user to enter a task
      return; // Stop further execution of the function
    }

    // Create a new li element and set its textContent to taskText
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a new button element for removing the task
    const remove-btn = document.createElement("button");
    remove-btn.textContent = "Remove";
    remove-btn.className = "remove-btn";

    // Assign an onclick event to the remove button to remove the li element from taskList
    remove-btn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the li element
    li.appendChild(remove-btn);

    // Append the li to taskList
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
