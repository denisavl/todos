import Star from "../../dist/image/star.png";
import { taskList } from "./createTask";

class Project {
  constructor(name) {
    this.name = name;
  }
}

class ProjectList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(projectName) {
    const index = this.projects.findIndex((project) => project.name === projectName);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }
}

class UI {
  static createProjectFromForm() {
    const name = document.querySelector("#name").value;
    return new Project(name);
  }

  static createProjectListItem(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("single-proj-container");

    const starIcon = new Image();
    starIcon.src = Star;
    starIcon.className = "star-icon";

    const projName = document.createElement("div");
    projName.className = "name";
    projName.innerHTML = project.name;

    const deleteProj = document.createElement("div");
    deleteProj.className = "delete-proj";
    deleteProj.innerHTML = "x";

    deleteProj.addEventListener("click", () => {
      this.deleteProject(project.name);
      projectDiv.remove();
    });

    projectDiv.addEventListener("click", () => {
      const pageTitle = document.querySelector(".page-title");
      pageTitle.textContent = project.name;
      this.displayTasksForProject(project.name);
    });

    projectDiv.appendChild(starIcon);
    projectDiv.appendChild(projName);
    projectDiv.appendChild(deleteProj);
    return projectDiv;
  }

  static clearFormInput() {
    document.querySelector("#name").value = "";
  }

  static displayTasksForProject(projectName) {
    const tasksContainer = document.querySelector(".big-container");
    tasksContainer.innerHTML = "";

    taskList.forEach((task) => {
      const taskProject = task.dataset.project;
      if (taskProject === projectName) {
        tasksContainer.appendChild(task);
      }
    });
  }

  static deleteProject(projectName) {
    projectList.removeProject(projectName);
    UI.updateProjectOptions(projectList.projects);
  }

  static updateProjectOptions(projectList) {
    const projectSelect = document.querySelector("#project");
    projectSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "inbox";
    defaultOption.text = "Inbox";
    defaultOption.selected = true;
    projectSelect.appendChild(defaultOption);

    projectList.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.name;
      option.text = project.name;
      projectSelect.appendChild(option);
    });
  }
}

const projectList = new ProjectList();

export function createProject() {
  const container = document.querySelector(".projects-container");
  const project = UI.createProjectFromForm();
  const projDiv = UI.createProjectListItem(project);
  container.appendChild(projDiv);

  projectList.addProject(project);
  UI.clearFormInput();
  UI.updateProjectOptions(projectList.projects);
}