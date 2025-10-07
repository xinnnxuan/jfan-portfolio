// Toggle functionality
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', function () {
    this.classList.toggle('active');
});

// PDF download functionality
function downloadPDF() {
    // Hide controls for printing
    const controls = document.querySelector('.controls');
    controls.style.display = 'none';

    // Print the page
    window.print();

    // Show controls again
    controls.style.display = 'flex';
}

// Reset print styles after printing
window.addEventListener('afterprint', function () {
    const controls = document.querySelector('.controls');
    controls.style.display = 'flex';
});
