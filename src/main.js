const sidebarToggle = document.getElementById('sidebar-toggle');
const header = document.getElementById('web-header');
const overlay = document.getElementById('sidebar-overlay');



function handleAria() {
    const isExpanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
    sidebarToggle.setAttribute('aria-expanded', !isExpanded);
  
    if (!isExpanded) {
        sidebarToggle.setAttribute('aria-label', 'Close navigation menu');
    } else {
        sidebarToggle.setAttribute('aria-label', 'Open navigation menu');
    }
}

sidebarToggle.addEventListener('click', () => {
    header.classList.toggle('is-open');
    handleAria();
});

overlay.addEventListener('click', () => {
    header.classList.toggle('is-open');
    handleAria();
});