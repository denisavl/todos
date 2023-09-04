import Star from "../../dist/image/star.png";
import App from '../index';

class Project {
  constructor(name) {
    this.name = name;
  }
}

export function createProject() {
  const container = document.querySelector(".projects-container");
  const project = createProjectFromForm();
  const projDiv = createProjectListItem(project);
  container.appendChild(projDiv);

  const app = new App(); 
  app.updateProjectList(project); 

  clearFormInput();
}

function createProjectFromForm() {
  const name = document.querySelector("#name").value;
  return new Project(name);
}

function createProjectListItem(project) {
  const projectDiv = document.createElement("div");
  projectDiv.className = "single-proj-container";

  const starIcon = new Image();
  starIcon.src = Star;
  starIcon.className = "star-icon";

  const projName = document.createElement("div");
  projName.className = "name";
  projName.innerHTML = project.name;

  const deleteProj = document.createElement("div");
  deleteProj.className = "delete-proj";
  deleteProj.innerHTML = "x";

  deleteProjAddEvent(deleteProj, project.name);

  projectDiv.appendChild(starIcon);
  projectDiv.appendChild(projName);
  projectDiv.appendChild(deleteProj);
  return projectDiv;
}

function deleteProjAddEvent(deleteProj, projectName) {
  deleteProj.addEventListener("click", () => {
    const app = new App();
    app.deleteProjectOption(projectName);

    const container = document.querySelector(".projects-container");
    const child = document.querySelector(".single-proj-container");
    container.removeChild(child);
  });
}
function clearFormInput() {
  document.querySelector("#name").value = "";
}
