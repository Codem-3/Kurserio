document.addEventListener('DOMContentLoaded', function () {
    new Splide('#marquee', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 0,
        speed: 1500,
        pauseOnHover: true,
        arrows: false,
        pagination: false,
        drag: false,
        autoWidth: true,
    }).mount();
});