import { createTask, taskList } from "./createTask";
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
    this.updateContent("Inbox");
  }

  toggleNav() {
    this.nav.style.display =
      this.nav.style.display === "none" || this.nav.style.display === ""
        ? "block"
        : "none";
    this.content.style.gridColumn =
      this.nav.style.display === "none" ? "1/3" : "2/3";
  }

  openModal() {
    this.modal.style.display = "block";
    this.titleTaskError.display = "none";
    this.dateTaskError.display = "none";
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  openProjModal() {
    this.projModal.style.display = "block";
    this.projectError.style.display = "none";
  }

  closeProjModal() {
    this.projModal.style.display = "none";
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
    addBtn.addEventListener("click", (event) => {
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
      }
    });
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
        const taskDate = new Date(task.querySelector(".date").textContent);
        if (
          taskDate.getFullYear() === currentDate.getFullYear() &&
          taskDate.getMonth() === currentDate.getMonth() &&
          taskDate.getDate() === currentDate.getDate()
        ) {
          tasksContainer.appendChild(task);
        }
      });
    } else if (category === "Next Week") {
      const currentDate = new Date();
      const nextWeekDate = new Date();
      nextWeekDate.setDate(currentDate.getDate() + 7);
      taskList.forEach((task) => {
        const taskDate = new Date(task.querySelector(".date").textContent);
        if (taskDate >= currentDate && taskDate <= nextWeekDate) {
          tasksContainer.appendChild(task);
        }
      });
    }
  }
}

export default App;