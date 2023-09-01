export function createWeek() {
    const container = document.querySelector('.content');
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.innerHTML = 'Next Week';
    const bigContainer = document.createElement('ul');
    bigContainer.className = 'big-container';
    container.innerHTML = ''; 
    container.appendChild(title);
    container.appendChild(bigContainer);
}