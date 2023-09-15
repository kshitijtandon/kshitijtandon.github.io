// Function to toggle the visibility of the text when a section heading is clicked
document.querySelectorAll('h2').forEach(title => {
    title.addEventListener('click', function () {
        const section = this.parentElement;
        const isOpen = section.style.maxHeight === 'none' || !section.style.maxHeight;

        // Close all sections
        document.querySelectorAll('.expandable-section').forEach(s => {
            s.style.maxHeight = '0';
        });

        // Open the clicked section if it was closed, otherwise close it
        if (isOpen) {
            section.style.maxHeight = section.scrollHeight + 'px';
        }
    });
});
