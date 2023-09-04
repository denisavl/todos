import Pen from '../../dist/image/pen.png';
import Delete from '../../dist/image/delete-icon.png';
import App from '../index';
// import { createProject } from "./createProject";

class Task {
  constructor(title, description, date, priority, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}

export function createTask() {
  const task = createTaskFromForm();
  const li = createTaskListItem(task);

  const tasksContainer = document.querySelector('.big-container');
  tasksContainer.appendChild(li);
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
    populateModalForEdit(task);
    const app = new App();
    app.openModal();
  });
}

// function populateModalForEdit(task) {
//   const titleInput = document.querySelector("#title");
//   const descriptionInput = document.querySelector("#description");
//   const dateInput = document.querySelector("#date");
//   const priorityInput = document.querySelector("#priority");
//   const projectInput = document.querySelector("#project");
//   const addTaskButton = document.querySelector(".add-task");

//   titleInput.value = task.title;
//   descriptionInput.value = task.description;
//   dateInput.value = task.date;
//   priorityInput.value = task.priority;
//   projectInput.value = task.project;

//   addTaskButton.textContent = "Update Task";

//   addTaskButton.removeEventListener('click', createTask);

//   addTaskButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     updateTask(task);
//     const app = new App();
//     app.closeModal();
//   });
// }

// function updateTask(task) {
//   const updatedTitle = document.querySelector("#title").value;
//   const updatedDescription = document.querySelector("#description").value;
//   const updatedDate = document.querySelector("#date").value;
//   const updatedPriority = document.querySelector("#priority").value;
//   const updatedProject = document.querySelector("#project").value;

//   task.title = updatedTitle;
//   task.description = updatedDescription;
//   task.date = updatedDate;
//   task.priority = updatedPriority;
//   task.project = updatedProject;
// }

function createPenIcon(task) {
  const penIcon = new Image();
  penIcon.src = Pen;
  penIcon.classList.add('pen');

  const penContainer = document.createElement('span');
  penContainer.classList.add('pen-container');
  penContainer.appendChild(penIcon);

  // addPenIconClickListener(penIcon, task);

  return penContainer;
}

function deleteIconAddEvent(deleteIcon){
  deleteIcon.addEventListener('click',()=>{
    const container = document.querySelector('.big-container');
    const child = document.querySelector('.container-task');
    container.removeChild(child);
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