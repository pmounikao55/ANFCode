const addTaskElement = () => {
  var taskInput = document.getElementById("message");
  var taskInputErrorMessages = document.getElementById("errors");
  if (!!taskInput.value) {
    var generatedTask = generateTaskAndStore(taskInput.value);
    buildTask(generatedTask);
    taskInput.value = '';
    taskInput.classList.remove('errors');
    taskInputErrorMessages.innerText = '';
    taskInputErrorMessages.hidden = true;
  } else {
    taskInput.classList.add('errors');
    taskInputErrorMessages.innerText = 'Enter the Item name';
    taskInputErrorMessages.hidden = false;
  }
};

const toggleTaskElementEdit = (id) => {
  const task = getTask(id);
  task.isEditing = !task.isEditing;
  toggleTaskElementEditMode(id, task.isEditing);
  task.value = getTaskValue(id);
  updateTask(task);  
};

const deleteTaskElement = (id) => {
  removeTask(id);
  deleteTaskFromList(id);
};

const toggleTaskCompletion = (id) => {
  const task = getTask(id);
  task.isCompleted = !task.isCompleted;
  updateTask(task);
  toggleTaskElementCompletion(id, task.isCompleted);
}

(
  () => {
    let listOfStorageTasks = getTasks();

    if (!listOfStorageTasks.length) {
      const defaultTasks = [
        {id: 1, value: 'Pay Bills', isEditing: false, isCompleted: false},
        {id: 2, value: 'Go Shopping', isEditing: true, isCompleted: false},
        {id: 3, value: 'See the Doctor', isEditing: false, isCompleted: true},
      ];
      setTasks(defaultTasks);
      listOfStorageTasks = defaultTasks;
    }
    listOfStorageTasks.forEach(x => buildTask(x));
})();
