"use strict";

const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
const sliderContainer = document.querySelector(".slider__container");
let startX = 0;
let isDragging = false;
let currentIndex = 0;

function goToSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${index * -100}%)`;
  });
  updateDots();
}

function updateDots() {
  dots.forEach((dot) => {
    dot.classList.remove("slider__dot--active");
  });
  dots[currentIndex].classList.add("slider__dot--active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    currentIndex = index;
    goToSlide(currentIndex);
  });
});

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
}

document
  .querySelector(".slider__button--next")
  .addEventListener("click", nextSlide);
document
  .querySelector(".slider__button--prev")
  .addEventListener("click", prevSlide);

let timer = setInterval(nextSlide, 3000);

function pauseSlider() {
  clearInterval(timer);
}

function playSlider() {
  timer = setInterval(nextSlide, 3000);
}

let isPlaying = true;
const playButton = document.querySelector(".slider__play-pause");

function togglePlayPause() {
  if (isPlaying) {
    pauseSlider();
    playButton.textContent = "▶";
    isPlaying = false;
  } else {
    playSlider();
    playButton.textContent = "⏸";
    isPlaying = true;
  }
}

playButton.addEventListener("click", togglePlayPause);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextSlide();
  }
  if (event.key === "ArrowLeft") {
    prevSlide();
  }
});

sliderContainer.addEventListener("mousedown", function (event) {
  startX = event.clientX;
  isDragging = true;
});

sliderContainer.addEventListener("mouseup", function (event) {
  if (!isDragging) return;
  isDragging = false;

  const endX = event.clientX;
  const diff = endX - startX;

  if (diff > 50) {
    prevSlide();
  } else if (diff < -50) {
    nextSlide();
  }
});

sliderContainer.addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
  isDragging = true;
});

sliderContainer.addEventListener("touchend", function (event) {
  if (!isDragging) return;
  isDragging = false;

  const endX = event.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff > 50) {
    prevSlide();
  } else if (diff < -50) {
    nextSlide();
  }
});
