import "./style.css";
import { createInbox } from "./module/inbox";
import { createToday } from "./module/today";
import { createWeek } from "./module/nextWeek";
import { createNotes } from "./module/notes";

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const nav = document.querySelector(".side-bar");
  const content = document.querySelector(".content");

  burgerBtn.addEventListener("click", () => {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "block";
      content.style.gridColumn = "2/3";
    } else {
      nav.style.display = "none";
      content.style.gridColumn = "1/3";
    }
  });
  const inboxBox = document.querySelector(".inbox");
  inboxBox.addEventListener("click", () => {
    createInbox();
  });
  const todayBox = document.querySelector('.today');
  todayBox.addEventListener('click',()=>{
    createToday();
  });
  const nextWeekBox = document.querySelector('.next-week');
  nextWeekBox.addEventListener('click',()=>{
    createWeek();
  });
  
  const notesBox = document.querySelector('.notes');
  notesBox.addEventListener('click', ()=>{
    createNotes();
  })

  const homeBtn = document.querySelector('.home-btn');
  homeBtn.addEventListener('click',()=>{
    createToday();
  })
});
