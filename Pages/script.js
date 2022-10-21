const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1)
            activeSlideIndex = 0;
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0)
            activeSlideIndex = slidesLength - 1;
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

window.onscroll = function (){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    
    var elemento1 = document.getElementById("icon_fork");
    var elemento2 = document.getElementById("icon_fire");

    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.2 + "px";
}