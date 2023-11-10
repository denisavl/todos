import {
  createTask,
  taskList,
  editingTask,
  createTaskFromForm,
  clearFormInputs,
  createTaskListItem
} from "./createTask";
import { createProject } from "./createProject";

class App {
  constructor() {
    this.nav = document.querySelector(".side-bar");
    this.content = document.querySelector(".content");
    this.modal = document.querySelector(".modal");
    this.projModal = document.querySelector(".proj-modal");
    this.projectInput = document.querySelector("#name");
    this.titleTaskInput = document.querySelector("#title");
    this.dateTaskInput = document.querySelector("#date");
    this.projectError = document.querySelector(".name-warning");
    this.titleTaskError = document.querySelector(".title-warning");
    this.dateTaskError = document.querySelector(".date-warning");
  }

  init() {
    this.attachEventListeners();
    this.loadTasksFromLocalStorage();
    this.updateContent("Inbox");
  }

  toggleNav() {
    this.nav.classList.toggle('show');
    this.content.style.gridColumn = this.nav.classList.contains('show') ? '2/3' : '1/3';
    if (this.nav.classList.contains('show')) {
      this.nav.style.display = 'block';
    } else {
      this.nav.style.display = 'none';
    }
  }

  openModal() {
    this.modal.style.display = "block";
    this.titleTaskError.display = "none";
    this.dateTaskError.display = "none";

    if (editingTask) {
      document.querySelector("#title").value = editingTask.title;
      document.querySelector("#description").value = editingTask.description;
      document.querySelector("#date").value = editingTask.date;
      document.querySelector("#priority").value = editingTask.priority;
      document.querySelector("#project").value = editingTask.project;
      document.querySelector(".title-modal-task").textContent = "Edit Task";

      document.querySelector(".update-task").style.display = "block";
      document.querySelector(".add-task").style.display = "none";
    } else {
      document.querySelector("#title").value = "";
      document.querySelector("#description").value = "";
      document.querySelector("#date").value = "";
      document.querySelector("#priority").value = "not-important";
      document.querySelector("#project").value = "inbox";
      document.querySelector(".title-modal-task").textContent = "New Task";

      document.querySelector(".add-task").style.display = "block";
      document.querySelector(".update-task").style.display = "none";
    }
  }

  closeModal() {
    this.modal.style.display = "none";
    clearFormInputs();
    document.querySelector(".title-modal-task").textContent = "New Task";
    document.querySelector(".add-task").textContent = "Add Task";
    editingTask = null;
  }

  openProjModal() {
    this.projModal.style.display = "block";
    this.projectError.style.display = "none";
  }

  closeProjModal() {
    this.projModal.style.display = "none";
  }

  loadTasksFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.length = 0; 
    savedTasks.forEach((taskData) => {
      taskList.push(createTaskListItem(taskData, null, this)); 
    });
  }

  handleAddBtn(event) {
    event.preventDefault();
    if (
      this.titleTaskInput.value.trim() === "" &&
      this.dateTaskInput.value.trim() === ""
    ) {
      this.titleTaskError.style.display = "block";
      this.dateTaskError.style.display = "block";
    } else if (this.titleTaskInput.value.trim() === "") {
      this.titleTaskError.style.display = "block";
      this.dateTaskError.style.display = "none";
    } else if (this.dateTaskInput.value.trim() === "") {
      this.titleTaskError.style.display = "none";
      this.dateTaskError.style.display = "block";
    } else {
      this.titleTaskError.style.display = "none";
      this.dateTaskError.style.display = "none";
      createTask();
      this.closeModal();
      this.saveTasksToLocalStorage();
    }
  }

  handleUpdateTask(event) {
    event.preventDefault();
    const updatedTask = createTaskFromForm();
    if (editingTask) {
      editingTask.title = updatedTask.title;
      editingTask.description = updatedTask.description;
      editingTask.date = updatedTask.date;
      editingTask.priority = updatedTask.priority;
      editingTask.project = updatedTask.project;

      const taskElement = taskList.find(
        (task) => task.dataset.project === editingTask.project
      );
      if (taskElement) {
        const titleElement = taskElement.querySelector(".title-task");
        const descriptionElement =
          taskElement.querySelector(".description-task");
        const dateElement = taskElement.querySelector(".date");
        const priorityElement = taskElement.querySelector(".diamond");

        titleElement.textContent = editingTask.title;
        descriptionElement.textContent = editingTask.description;
        dateElement.textContent = editingTask.date;

        priorityElement.textContent = "\u25C6";
        priorityElement.classList.remove("important", "not-important");
        if (editingTask.priority === "important") {
          priorityElement.classList.add("important");
        } else {
          priorityElement.classList.add("not-important");
        }

        this.closeModal();
        this.saveTasksToLocalStorage();
      }
    }
  }
  saveTasksToLocalStorage() {
    const tasksData = taskList.map((task) => {
      return {
        title: task.querySelector(".title-task").textContent,
        description: task.querySelector(".description-task").textContent,
        date: task.querySelector(".date").textContent,
        priority: task.querySelector(".diamond").classList.contains("important")
          ? "important"
          : "not-important",
        project: task.dataset.project,
      };
    });
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  }

  attachEventListeners() {
    const burgerBtn = document.querySelector(".burger-btn");
    const newTaskBtn = document.querySelector(".new-task");
    const closeBtn = document.querySelector(".close");
    const cancelBtn = document.querySelector(".cancel-btn");
    const closeProjBtn = document.querySelector(".close-proj");
    const cancelProjBtn = document.querySelector(".cancel-proj");
    const homeBtn = document.querySelector(".home-btn");
    const addBtn = document.querySelector(".add-task");
    const addProj = document.querySelector(".add-project");
    const addProjBtn = document.querySelector(".add-proj");

    burgerBtn.addEventListener("click", () => this.toggleNav());
    newTaskBtn.addEventListener("click", () => this.openModal());
    closeBtn.addEventListener("click", () => this.closeModal());
    cancelBtn.addEventListener("click", () => this.closeModal());
    closeProjBtn.addEventListener("click", () => this.closeProjModal());
    cancelProjBtn.addEventListener("click", () => this.closeProjModal());
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });
    this.projModal.addEventListener("click", (event) => {
      if (event.target === this.projModal) {
        this.closeProjModal();
      }
    });
    homeBtn.addEventListener("click", () => this.updateContent("Inbox"));
    addProj.addEventListener("click", () => this.openProjModal());
    addBtn.addEventListener("click", (event) => this.handleAddBtn(event));
    addProjBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.projectInput.value.trim() === "") {
        this.projectError.style.display = "block";
      } else {
        createProject();
        this.closeProjModal();
      }
    });
    document.querySelector(".inbox").addEventListener("click", () => {
      this.updateContent("Inbox");
    });
    document.querySelector(".today").addEventListener("click", () => {
      this.updateContent("Today");
    });
    document.querySelector(".next-week").addEventListener("click", () => {
      this.updateContent("Next Week");
    });

    document.querySelector(".update-task").addEventListener("click", (event) => {
      this.handleUpdateTask(event);
    });
  }
  updateContent(category) {
    const pageTitle = document.querySelector(".page-title");
    const tasksContainer = document.querySelector(".big-container");

    pageTitle.textContent = category;

    tasksContainer.innerHTML = "";
    if (category === "Inbox") {
      taskList.forEach((task) => {
        tasksContainer.appendChild(task);
      });
    } else if (category === "Today") {
      const currentDate = new Date();
      taskList.forEach((task) => {
        if (task instanceof HTMLElement) {
          const taskDate = new Date(task.querySelector(".date").textContent);
          if (
            taskDate.getFullYear() === currentDate.getFullYear() &&
            taskDate.getMonth() === currentDate.getMonth() &&
            taskDate.getDate() === currentDate.getDate()
          ) {
            tasksContainer.appendChild(task);
          }
        }
      });
    } else if (category === "Next Week") {
      const currentDate = new Date();
      const nextWeekDate = new Date();
      nextWeekDate.setDate(currentDate.getDate() + 7);
      taskList.forEach((task) => {
        if (task instanceof HTMLElement) {
          const taskDate = new Date(task.querySelector(".date").textContent);
          if (taskDate >= currentDate && taskDate <= nextWeekDate) {
            tasksContainer.appendChild(task);
          }
        }
      });
    }
  }
}

export default App;
