export function createToday() {
    const container = document.querySelector('.content');
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.innerHTML = 'Today';
    container.innerHTML = ''; 
    container.appendChild(title);
}