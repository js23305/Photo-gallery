// Function to open the lightbox
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}