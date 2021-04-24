// DOM Elements
const body = document.getElementById("body");
const inputBox = document.querySelector(".input-field input");
const addBtn = document.querySelector(".input-field button");
const taskList = document.querySelector(".task-list");
const deleteAllBtn = document.querySelector(".footer button");
const pendingTasks = document.querySelector(".pending-tasks");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

showTasks();

// Add Button Active
function toggleActive() {
  const text = inputBox.value;
  if (text.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}

// Add Task Function
function addTask() {
  const text = inputBox.value;
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
  addBtn.classList.remove("active");
  inputBox.value = "";
}

// Show Tasks
function showTasks() {
  pendingTasks.textContent = tasks.length;
  if (tasks.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }
  let li = "";

  tasks.forEach((element, index) => {
    li += `<li>${element} <span class="icon" onclick='deleteTask(${index})'><i class="fas fa-trash"></i> </span></li>`;
  });
  taskList.innerHTML = li;
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

// Delete All
function deleteAllTasks() {
  tasks = [];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

// Event Listeners
inputBox.addEventListener("keyup", toggleActive);
addBtn.addEventListener("click", addTask);
deleteAllBtn.addEventListener("click", deleteAllTasks);
