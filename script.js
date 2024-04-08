function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    var taskDate = document.getElementById("taskDate").value;
    var taskTime = document.getElementById("taskTime").value;
    var taskList = document.getElementById("taskList");
  
    if (taskInput === "" || taskDate === "" || taskTime === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  
    var li = document.createElement("li");
    li.innerHTML = taskInput + "<br>Date: " + taskDate + "<br>Heure: " + taskTime;
  
    // Ajouter un attribut data pour stocker l'heure de l'alarme
    li.setAttribute("data-alarm", taskDate + " " + taskTime);
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", function() {
      this.parentElement.remove();
    });
  
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  
    // Configurer l'alarme pour cette tâche
    setupAlarm(li);
  }
function setupAlarm(taskElement) {
    var alarmTime = taskElement.getAttribute("data-alarm");
    var timeToAlarm = new Date(alarmTime) - new Date();
    if (timeToAlarm > 0) {
      setTimeout(function() {
        alert("C'est l'heure de la tâche : " + taskElement.textContent);
      }, timeToAlarm);
    }
  }
    