document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider Logic
    const slides = document.querySelectorAll('.hero-slide');
    const nextBtn = document.querySelector('.hero-next');
    const prevBtn = document.querySelector('.hero-prev');
    let currentSlide = 0;
    const slideDuration = 6000; // 6 seconds per slide
    let slideInterval;

    if (slides.length > 0) {
        const showSlide = (index) => {
            // Remove active class from all slides
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Handle index bounds
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            
            // Add active class to current slide
            // (The CSS transition handles the slow zoom-out effect on the background image)
            slides[currentSlide].classList.add('active');
        };

        const nextSlide = () => {
            showSlide(currentSlide + 1);
        };

        const prevSlide = () => {
            showSlide(currentSlide - 1);
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, slideDuration);
        };

        // Event Listeners for arrows
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }

        // Initialize auto-play
        slideInterval = setInterval(nextSlide, slideDuration);
    }
});
