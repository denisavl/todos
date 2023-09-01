import Pen from './pen.png';
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

  const penIcon = createPenIcon();

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

function createPenIcon() {
  const penIcon = new Image();
  penIcon.src = Pen;
  penIcon.classList.add('pen');
  return penIcon;
}

function clearFormInputs() {
  document.querySelector("#title").value = '';
  document.querySelector("#description").value = '';
  document.querySelector("#date").value = '';
  document.querySelector("#priority").value = 'not-important';
  document.querySelector("#project").value = 'inbox';
}