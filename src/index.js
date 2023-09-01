import "./style.css";
import { createInbox } from "./module/inbox";
import { createToday } from "./module/today";
import { createWeek } from "./module/nextWeek";
import { createNotes } from "./module/notes";
import { createTask } from "./module/createTask";


class App {
  constructor() {
    this.nav = document.querySelector(".side-bar");
    this.content = document.querySelector(".content");
    this.modal = document.querySelector(".modal");

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

  attachEventListeners() {
    const burgerBtn = document.querySelector(".burger-btn");
    const newTaskBtn = document.querySelector(".new-task");
    const closeBtn = document.querySelector(".close");
    const cancelBtn = document.querySelector(".cancel-btn");
    const inboxBox = document.querySelector(".inbox");
    const todayBox = document.querySelector(".today");
    const nextWeekBox = document.querySelector(".next-week");
    const notesBox = document.querySelector(".notes");
    const homeBtn = document.querySelector(".home-btn");
    const addBtn = document.querySelector(".add-task");

    burgerBtn.addEventListener("click", () => this.toggleNav());
    newTaskBtn.addEventListener("click", () => this.openModal());
    closeBtn.addEventListener("click", () => this.closeModal());
    cancelBtn.addEventListener("click", () => this.closeModal());
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });
    inboxBox.addEventListener("click", () => createInbox());
    todayBox.addEventListener("click", () => createToday());
    nextWeekBox.addEventListener("click", () => createWeek());
    notesBox.addEventListener("click", () => createNotes());
    homeBtn.addEventListener("click", () => createToday());
    addBtn.addEventListener("click", (event) => {
      event.preventDefault();
      createTask();
      this.closeModal();
    });

    inboxBox.click();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});