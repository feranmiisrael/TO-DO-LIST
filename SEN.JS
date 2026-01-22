// Variables match SDLC: taskInput, taskList
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function: AddTask
function AddTask() {
const taskText = taskInput.value.trim();
if (taskText === "") {
alert("Please enter a task!");
return;
}

// Create list item
const li = document.createElement("li");
li.textContent = taskText;

// Delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.onclick = function() {
DeleteTask(li);
};
li.appendChild(deleteBtn);

// Add to task list
taskList.appendChild(li);

// Clear input
taskInput.value = "";
}

// Function: DeleteTask
function DeleteTask(item) {
taskList.removeChild(item);
}

// Function: ViewTasks (already shown in taskList automatically)
function ViewTasks() {
return taskList.children;
}

