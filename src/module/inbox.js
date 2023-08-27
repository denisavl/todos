export function createInbox() {
    const container = document.querySelector('.content');
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.innerHTML = 'Inbox';
    container.innerHTML = ''; 
    container.appendChild(title);
}