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
function addHabit() {
    const habitInput = document.getElementById("habitInput");
    const habitList = document.getElementById("habitList");
    const habitName = habitInput.value.trim();
    if (habitName !== "") {
      const habitBtn = document.createElement("button");
        habitBtn.textContent = habitName;
        habitBtn.classList.add("habit-btn");
        habitBtn.addEventListener("click", function () {
        habitBtn.classList.toggle("completed");
        });
       habitList.appendChild(habitBtn);
      habitInput.value = "";
    }
}

// Reminders
function addReminder() {
    const textInput = document.getElementById("reminderInput");
    const dateInput = document.getElementById("reminderDate");
    const timeInput = document.getElementById("reminderTime");
    const text = textInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;

    if (!text || !date || !time) return;
      const li = document.createElement("li");
    li.textContent = `${text} - ${date} ${time}`;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
    };
   li.appendChild(delBtn);
    document.getElementById("reminderList").appendChild(li);

    textInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
}

