import Pen from '../../dist/image/pen.png';
import Delete from '../../dist/image/delete-icon.png';
import App from './app';

class Task {
  constructor(title, description, date, priority, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}
let taskList = [];
let editingTask = null;

// window.addEventListener('load', function() {
//   if (localStorage.getItem('tasks')) {
//     taskList = JSON.parse(localStorage.getItem('tasks'));
//     taskList.forEach(function(task) {
//       const li = createTaskListItem(task);
//       const tasksContainer = document.querySelector('.big-container');
//       tasksContainer.appendChild(li);
//     });
//   }
// });

function createTask() {
  const task = createTaskFromForm();
  if (editingTask) {
    editingTask.title = task.title;
    editingTask.description = task.description;
    editingTask.date = task.date;
    editingTask.priority = task.priority;
    editingTask.project = task.project;
    clearFormInputs();
    document.querySelector('.title-modal-task').textContent = 'New Task';
    document.querySelector('.add-task').textContent = 'Add Task';
    editingTask = null;
  } else {
    const li = createTaskListItem(task);
    taskList.push(li);
    const tasksContainer = document.querySelector('.big-container');
    tasksContainer.appendChild(li);
    // localStorage.setItem('tasks', JSON.stringify(taskList));
  }
  clearFormInputs();
}

function createTaskFromForm() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#date").value;
  const priority = document.querySelector("#priority").value;
  const project = document.querySelector("#project").value;
  return new Task(title, description, date, priority, project);
}

function createTaskListItem(task) {
  const li = document.createElement('li');
  li.className = 'container-task';
  li.dataset.project = task.project;
  const taskComplete = document.createElement('input');
  taskComplete.type = 'checkbox';

  const leftContainerTask = document.createElement('div');
  leftContainerTask.className = 'left-container-task';

  const displayTitle = createDivElement('title-task', task.title);
  const displayDescription = createDivElement('description-task', task.description);
  const displayDate = createDivElement('date', task.date);
  const displayPriority = createPriorityElement(task.priority);

  const penIcon = createPenIcon(task);

  const deleteIcon = createDeleteIcon();

  taskComplete.addEventListener('change', function () {
    displayTitle.style.textDecoration = taskComplete.checked ? 'line-through' : 'none';
  });

  leftContainerTask.appendChild(displayTitle);
  leftContainerTask.appendChild(displayDescription);
  li.appendChild(taskComplete);
  li.appendChild(leftContainerTask);
  li.appendChild(displayDate);
  li.appendChild(displayPriority);
  li.appendChild(penIcon);
  li.appendChild(deleteIcon);

  return li;
}

function createDivElement(className, content) {
  const div = document.createElement('div');
  div.className = className;
  div.innerHTML = content;
  return div;
}

function createPriorityElement(priority) {
  const displayPriority = document.createElement("span");
  displayPriority.classList.add("diamond");

  if (priority === "important") {
    displayPriority.classList.add("important");
  } else {
    displayPriority.classList.add("not-important");
  }

  displayPriority.textContent = "\u25C6";

  displayPriority.addEventListener('click', function () {
    if (priority === 'important') {
      priority = 'not-important';
      displayPriority.classList.remove('important');
      displayPriority.classList.add('not-important');
    } else {
      priority = 'important';
      displayPriority.classList.remove('not-important');
      displayPriority.classList.add('important');
    }
  });
  return displayPriority;
}

function addPenIconClickListener(penIcon, task) {
  penIcon.addEventListener('click', () => {
    editingTask = task; 
    const app = new App();
    app.openModal();
    const modalTitle = document.querySelector('.title-modal-task');
    const addButton = document.querySelector('.add-task');
    modalTitle.textContent = 'Edit Task';
    addButton.style.display = 'none';
    document.querySelector('.update-task').style.display = 'block';
  });
}

function createPenIcon(task) {
  const penIcon = new Image();
  penIcon.src = Pen;
  penIcon.classList.add('pen');

  const penContainer = document.createElement('span');
  penContainer.classList.add('pen-container');
  penContainer.appendChild(penIcon);

  addPenIconClickListener(penContainer, task);

  return penContainer;
}

function deleteIconAddEvent(deleteIcon) {
  deleteIcon.addEventListener('click', (event) => {
    const deleteContainer = event.target.closest('.container-task');
    const container = document.querySelector('.big-container');
    container.removeChild(deleteContainer);
    const index = taskList.findIndex((task) => task === deleteContainer.dataset.task);
    if (index !== -1) {
      taskList.splice(index, 1);
    }
  })
}

function createDeleteIcon(){
  const deleteIcon = new Image();
  deleteIcon.src = Delete;
  deleteIcon.classList.add('delete-icon');

  const deleteContainer = document.createElement('span');
  deleteContainer.classList.add('delete-container');
  deleteContainer.appendChild(deleteIcon);

  deleteIconAddEvent(deleteContainer);

  return deleteContainer;
}

function clearFormInputs() {
  document.querySelector("#title").value = '';
  document.querySelector("#description").value = '';
  document.querySelector("#date").value = '';
  document.querySelector("#priority").value = 'not-important';
  document.querySelector("#project").value = 'inbox';
}

export { taskList, createTask, editingTask, createTaskFromForm, clearFormInputs};