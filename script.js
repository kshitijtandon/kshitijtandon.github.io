// Function to toggle active section when its title is clicked
document.querySelectorAll('h2').forEach(title => {
    title.addEventListener('click', function () {
        const section = this.parentElement;
        const sections = document.querySelectorAll('.expandable-section');

        sections.forEach(s => s.classList.remove('active'));
        section.classList.add('active');
    });
});
