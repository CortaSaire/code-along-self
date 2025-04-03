let tasks = [];

let quotes = [
  "Keep pushing forward!",
  "Great job! One step closer to success",
  "Small progress is still progress!",
  "Hard work pays off! Keep going!",
  "You're doing amazing! Keep it up!",
];

function addTask() {
  let taskName = prompt("Enter a new task:");

  if (!taskName) {
    alert("Task cannot be empty!");
    return;
  }

  let task = { name: taskName, completed: false };

  tasks.push(task);

  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  if (tasks[index].completed) {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById(
      "message"
    ).innerHTML = `Task completed! ${randomQuote}`;
  } else {
    document.getElementById("message").innerHTML = "";
  }

  renderTasks();
}

function renderTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <span class="${task.completed ? "completed" : ""}">${task.name}</span>
    <button onclick="toggleTask(${index})">${
      task.completed ? "Undo" : "Done"
    }</button>`;
    taskList.appendChild(li);
  });
}
