module.exports = {
    content: ["./**/*.html"], // Path to the files that contain Tailwind CSS classes
    theme: {
        extend: {
            colors: {
                primaryColor: "#ddf487", // Custom primary color
                secondaryColor: "#bec4ed", // Custom primary color
                thirdlyColor: "#ebded4", // Custom secondary color
                fourthlyColor: "#b2aea0", // Custom third color
            },
            screens: {
                '2xl': '1536px',
                'xl': '1280px',
                'lg': '1024px',
                'md': '880px',
                'sm': '690px',
                'vsm': '460px',  // Breakpoint for very small screens
                'tiny': '410px', // Breakpoint for tiny screens
            },
        },
    },
    plugins: [], // Array to include any Tailwind CSS plugins
};