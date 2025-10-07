// Typewriter effect
function typeWriter() {
    const text = "hi! I'm...";
    const typewriterText = document.getElementById('typewriterText');
    const cursor = document.querySelector('.cursor');
    
    // Check if elements exist
    if (!typewriterText) {
        console.error('typewriterText element not found');
        return;
    }
    
    let i = 0;
    
    // Clear the initial text
    typewriterText.textContent = '';
    
    function type() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150); // Speed of typing
        } else {
            // After typing is complete, show the greeting after a short delay
            setTimeout(() => {
                showGreeting();
            }, 1000);
        }
    }
    
    // Start typing after a small delay to ensure elements are ready
    setTimeout(type, 100);
}

// Hide typewriter and show hero section
function showGreeting() {
    const typewriterContainer = document.getElementById('typewriterContainer');
    const greetingSection = document.getElementById('greetingSection');
    
    // Hide typewriter with fade out
    typewriterContainer.style.opacity = '0';
    typewriterContainer.style.transition = 'opacity 1s ease';
    
    // Show hero section after typewriter fades out
    setTimeout(() => {
        typewriterContainer.style.display = 'none';
        greetingSection.style.opacity = '1';
        greetingSection.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 1000);
}

// Scroll reveal functionality
function handleScroll() {
    const mainContent = document.querySelector('.main-content');
    const scrollPosition = window.scrollY;
    
    // Add scrolled class when user starts scrolling
    if (scrollPosition > 50) {
        mainContent.classList.add('scrolled');
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Start typewriter effect after a small delay
    setTimeout(() => {
        typeWriter();
    }, 200);
});