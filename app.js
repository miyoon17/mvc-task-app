document.addEventListener('DOMContentLoaded' , () => {
  const appDiv = document.getElementById('app');
  const heading = document.createElement('h1');
  heading.textContent = 'Task Manager';
  appDiv.appendChild(heading);
});