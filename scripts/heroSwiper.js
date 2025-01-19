// Wait for the DOM content to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function () {
    // Initialize a new Splide slider with the specified configuration
    new Splide('#articles-slider', {
        type: 'slide', // Type of the slider: 'slide' or 'loop'
        rewind: true, // Rewind to the first slide when the last slide is reached
        perPage: 2, // Number of slides to show per page
        padding: '20px', // Padding around the slider
        breakpoints: {
            950: {
                perPage: 1, // Number of slides to show per page when the viewport width is 950px or less
                padding: '20px', // Padding around the slider for smaller screens
            },
        },
        gap: '20px', // Gap between slides
        pagination: false, // Hide pagination dots
        arrows: false, // Hide navigation arrows
        autoplay: true, // Enable automatic sliding
        interval: 3500, // Interval time in milliseconds for automatic sliding
        speed: 1000, // Transition speed in milliseconds
        pauseOnHover: false, // Do not pause autoplay when the slider is hovered
    }).mount(); // Mount the Splide slider
});