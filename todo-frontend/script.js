const apiUrl = "http://localhost:5000/todos"; // adjust this if using NodePort or different path

const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

// Function to fetch and display tasks
async function fetchTasks() {
  const res = await fetch(apiUrl);
  const tasks = await res.json();

  list.innerHTML = ""; // Clear existing tasks

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  // Send task to backend
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task })
  });

  input.value = "";

  // Refresh task list
  fetchTasks();
});

// Initial load
fetchTasks();
