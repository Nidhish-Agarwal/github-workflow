function addTasks() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;
  // Save the task to localStorage

  const taskKey = Date.now(); // unique key
  localStorage.setItem(taskKey, taskText);
  addTask(taskText, taskKey);
}

// Fetch all tasks from localStorage and display them
document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const taskText = localStorage.getItem(key);
    addTask(taskText, key);
  }
});

function addTask(taskText, key) {
  const input = document.getElementById("taskInput");
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle("done");

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  // Remove the task from localStorage
  delBtn.onclick = () => {
    localStorage.removeItem(key);
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
