// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  li.onclick = () => {
    li.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Habit Tracker
if (document.getElementById("habitList")) {
  const habits = ["Drink Water ", "Read Book ", "Exercise ", "Meditate "];
  const habitList = document.getElementById("habitList");

  habits.forEach(habit => {
    const button = document.createElement("button");
    button.textContent = habit;
    button.onclick = () => {
      button.classList.toggle("done");
    };
    habitList.appendChild(button);
  });
}

// Reminders
function addReminder() {
  const input = document.getElementById("reminderInput");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("reminderList").appendChild(li);
  input.value = "";
}
