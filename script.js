// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.textContent = "Please fill in all fields.";
    return;
  }

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Form submitted successfully!";
  this.reset();
});

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = function () {
    this.parentElement.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
