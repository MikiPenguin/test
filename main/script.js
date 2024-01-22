// Replace placeholder images with actual image URLs
document.addEventListener("DOMContentLoaded", function () {
    const imagePlaceholders = document.querySelectorAll(".placeholder");
    imagePlaceholders.forEach(function (img) {
        img.src = "placeholder-image.jpg"; // Replace with actual image URL
    });
});
