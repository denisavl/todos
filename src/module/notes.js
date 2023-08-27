export function createNotes() {
    const container = document.querySelector('.content');
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.innerHTML = 'Notes';
    container.innerHTML = ''; 
    container.appendChild(title);
}