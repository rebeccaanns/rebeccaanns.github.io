function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//SLIDES
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slide.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

//CONTACT FORM
// function addClass() {
//     document.body.classList.add("sent");
// }

// send.addEventListener("click", addClass);