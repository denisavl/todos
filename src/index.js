import "./style.css";
import { createInbox } from "./module/inbox";
import { createToday } from "./module/today";
import { createWeek } from "./module/nextWeek";
import { createNotes } from "./module/notes";
import { createTask } from "./module/createTask";
import { createProject } from "./module/createProject";

let projectList = [];

class App {
  constructor() {
    this.nav = document.querySelector(".side-bar");
    this.content = document.querySelector(".content");
    this.modal = document.querySelector(".modal");
    this.projModal = document.querySelector('.proj-modal');
    this.projectInput = document.querySelector("#name");
    this.projectError = document.querySelector(".name-warning");
   
    this.attachEventListeners();
  }

    toggleNav() {
    this.nav.style.display = this.nav.style.display === "none" || this.nav.style.display === "" ? "block" : "none";
    this.content.style.gridColumn = this.nav.style.display === "none" ? "1/3" : "2/3";
  }

  openModal() {
    this.modal.style.display = "block";
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  openProjModal(){
    this.projModal.style.display = 'block';
    this.projectError.style.display = 'none';
  }

  closeProjModal(){
    this.projModal.style.display = 'none';
  }

  updateProjectList(project) {
    projectList.push(project);
    this.populateProjectOptions();
  }

  populateProjectOptions() {
    const projectSelect = document.querySelector("#project");
    projectSelect.innerHTML = "";

    const inboxOption = document.createElement("option");
    inboxOption.value = "inbox";
    inboxOption.textContent = "Inbox";
    projectSelect.appendChild(inboxOption);

    projectList.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.name;
      option.text = project.name;
      projectSelect.appendChild(option);
    });
  }
  
  deleteProjectOption(projectName) {
    const projectIndex = projectList.findIndex((project) => project.name === projectName);
    if (projectIndex !== -1) {
      projectList.splice(projectIndex, 1);
      this.populateProjectOptions();
    }
  }

  attachEventListeners() {
    const burgerBtn = document.querySelector(".burger-btn");
    const newTaskBtn = document.querySelector(".new-task");
    const closeBtn = document.querySelector(".close");
    const cancelBtn = document.querySelector(".cancel-btn");
    const closeProjBtn = document.querySelector('.close-proj');
    const cancelProjBtn = document.querySelector(".cancel-proj");
    const inboxBox = document.querySelector(".inbox");
    const todayBox = document.querySelector(".today");
    const nextWeekBox = document.querySelector(".next-week");
    const notesBox = document.querySelector(".notes");
    const homeBtn = document.querySelector(".home-btn");
    const addBtn = document.querySelector(".add-task");
    const addProj = document.querySelector('.add-project');
    const addProjBtn = document.querySelector('.add-proj');

    burgerBtn.addEventListener("click", () => this.toggleNav());
    newTaskBtn.addEventListener("click", () => this.openModal());
    closeBtn.addEventListener("click", () => this.closeModal());
    cancelBtn.addEventListener("click", () => this.closeModal());
    closeProjBtn.addEventListener('click',()=>this.closeProjModal());
    cancelProjBtn.addEventListener('click',()=>this.closeProjModal());
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
    inboxBox.addEventListener("click", () => createInbox());
    todayBox.addEventListener("click", () => createToday());
    nextWeekBox.addEventListener("click", () => createWeek());
    notesBox.addEventListener("click", () => createNotes());
    homeBtn.addEventListener("click", () => createToday());
    addProj.addEventListener("click", () => this.openProjModal());
    addBtn.addEventListener("click", (event) => {
    event.preventDefault();
      createTask();
      this.closeModal();
    });
    addProjBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.projectInput.value.trim() === '') {
        this.projectError.style.display = 'block';
      } else {
        createProject();
        this.closeProjModal();
      }
    });

    inboxBox.click();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});

export default App;