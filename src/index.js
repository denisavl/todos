import "./style.css";
import { createInbox } from "./module/inbox";
import { createToday } from "./module/today";
import { createWeek } from "./module/nextWeek";
import { createNotes } from "./module/notes";

function initializeApp() {
  const toggleNav = () => {
    const nav = document.querySelector(".side-bar");
    const content = document.querySelector(".content");

    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "block";
      content.style.gridColumn = "2/3";
    } else {
      nav.style.display = "none";
      content.style.gridColumn = "1/3";
    }
  };

  const openModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
  };

  const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  };

  const attachEventListeners = () => {
    const burgerBtn = document.querySelector(".burger-btn");
    burgerBtn.addEventListener("click", toggleNav);

    const newTaskBtn = document.querySelector('.new-task');
    newTaskBtn.addEventListener('click', openModal);

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', closeModal);

    const modal = document.querySelector('.modal');
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    };

    const inboxBox = document.querySelector(".inbox");
    inboxBox.addEventListener("click", createInbox);

    const todayBox = document.querySelector('.today');
    todayBox.addEventListener('click', createToday);

    const nextWeekBox = document.querySelector('.next-week');
    nextWeekBox.addEventListener('click', createWeek);

    const notesBox = document.querySelector('.notes');
    notesBox.addEventListener('click', createNotes);

    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', createToday);
  };

  attachEventListeners();
}

document.addEventListener("DOMContentLoaded", initializeApp);
