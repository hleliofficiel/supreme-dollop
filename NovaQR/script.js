document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.doc-section');
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.getElementById('menuToggle');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            sections.forEach(section => section.classList.remove('active'));
            
            const targetId = item.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            if (sidebar && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }

            history.pushState(null, null, `#${targetId}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetNav = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        
        if (targetNav) {
            targetNav.click();
        }
    }
});
