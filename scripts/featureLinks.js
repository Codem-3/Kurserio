// Handle the click event on the feature links ( Hide all sections and show the target section )

document.addEventListener("DOMContentLoaded", function () {
    const featureLinks = document.querySelectorAll(".feature-link");
    const featureSections = document.querySelectorAll(".feature-section");

    featureLinks.forEach(link => {
        link.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");

            // Hide all sections
            featureSections.forEach(section => {
                section.classList.add("hidden");
            });

            // Show the target section
            document.getElementById(targetId).classList.remove("hidden");

            // Update link styles
            featureLinks.forEach(link => {
                link.classList.remove("underline", "underline-offset-4", "decoration-primaryColor", "decoration-4", "text-black", "font-bold");
            });
            this.classList.add("underline", "underline-offset-4", "decoration-primaryColor", "decoration-4", "text-black", "font-bold");
        });
    });
});