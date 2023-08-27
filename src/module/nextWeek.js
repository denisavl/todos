export function createWeek() {
    const container = document.querySelector('.content');
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.innerHTML = 'Next Week';
    container.innerHTML = ''; 
    container.appendChild(title);
}