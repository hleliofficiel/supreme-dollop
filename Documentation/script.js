document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.doc-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${targetId}`);
        });
    });

    // Handle initial load with hash
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetNav = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        
        if (targetNav) {
            targetNav.click();
        }
    }
});
