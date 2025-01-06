module.exports = {
    content: ["./**/*.html"], // Path to the files that contain Tailwind CSS classes
    theme: {
        extend: {
            colors: {
                primaryColor: "#ddf487", // Custom primary color
                secondaryColor: "#ebded4", // Custom secondary color
            },
            screens: {
                'vsm': '460px',  // Breakpoint for very small screens
                'tiny': '410px', // Breakpoint for tiny screens
            },
        },
    },
    plugins: [], // Array to include any Tailwind CSS plugins
};