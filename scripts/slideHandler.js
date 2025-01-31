// Handle Slide for Subscription Section
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-subscription', {
        type: 'slide',
        perPage: 3,  // Number of visible slides
        perMove: 1,  // Number of slides moved on a single slide move
        rewind: true,
        gap: '2rem',
        pagination: false,  // Hide pagination
        breakpoints: {
            1270: {
                perPage: 2,
                gap: '20px',
                focus: 'center',
            },
            825: {
                perPage: 1,
                gap: '10px',
                focus: 'center',
                padding: {
                    left: '20px',
                    right: '20px',
                },
            },
        },
    }).mount();
});