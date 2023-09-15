// JavaScript to control section visibility and simulate page transitions
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.page-section');
    
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Function to navigate to a section
    function navigateToSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
    
    // Event listener for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            navigateToSection(sectionId);
        });
    });
});
