export function createInbox() {
    const container = document.querySelector('.content');
    const title = document.createElement('h1');
    const bigContainer = document.createElement('ul');
    bigContainer.className = 'big-container';
    title.className = 'page-title';
    title.innerHTML = 'Inbox';
    container.innerHTML = ''; 
    container.appendChild(title);
    container.appendChild(bigContainer);
}