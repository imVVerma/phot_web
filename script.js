// Optional: Add dynamic features here
console.log("Script loaded successfully!");

// Example: Smooth scrolling for links (if added in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add the parallax effect on scroll
window.addEventListener('scroll', function() {
    const parallaxItems = document.querySelectorAll('.gallery-item img');
    
    parallaxItems.forEach(item => {
        const speed = 0.5;  // Adjust the speed of the parallax effect
        const offset = window.pageYOffset * speed;
        
        item.style.transform = `translateY(${offset}px)`;  // Move the image vertically
    });
});
