export function createNotes() {
    const container = document.querySelector('.content');
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.innerHTML = 'Notes';
    const bigContainer = document.createElement('ul');
    bigContainer.className = 'big-container';
    container.innerHTML = ''; 
    container.appendChild(title);
    container.appendChild(bigContainer);
}