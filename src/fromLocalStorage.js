// Definiendo las UI
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear task event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks event
  // filter.addEventListener('keyup', filterTasks);
}

// Get tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }