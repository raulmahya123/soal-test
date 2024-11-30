let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    // Ensure the index is within bounds
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;

    // Move the carousel to the correct slide
    document.querySelector(".carousel").style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}
