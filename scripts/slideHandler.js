// Handle Slide for Subscription Section

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-subscription', {
        type: 'slide',
        perPage: 3,  // Number of visible slides
        perMove: 1,
        gap: '1rem',
        padding: {
            left: '3rem',
            right: '3rem',
        },
        pagination: false,  // Hide pagination
        breakpoints: {
            1270: {
                perPage: 2,
                gap: '20px',
                padding: {
                    left: '3rem',
                    right: '3rem',
                },
            },
            825: {
                perPage: 1,
                gap: '10px',
                padding: {
                    left: '20px',
                    right: '20px',
                },
            },
        },
    }).mount();
});
