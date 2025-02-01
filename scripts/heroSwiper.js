document.addEventListener('DOMContentLoaded', function () {
    // Initialize a new Splide slider
    new Splide('#articles-slider', {
        type: 'slide',
        rewind: true, // Rewind to the first slide when the last slide is reached
        perPage: 2, // Number of slides to show per page
        breakpoints: {
            880: {
                perPage: 1,
            },
        },
        pagination: false,
        arrows: false,
        autoplay: true, // Enable automatic sliding
        interval: 3500, // Interval time for automatic sliding
        speed: 1000, // Transition speed
        pauseOnHover: false,
    }).mount();
});