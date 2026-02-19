"use strict";

class Slider {
  constructor(container, config = {}) {
    this.container = container;

    this.config = {
      interval: config.interval || 3000,
      showDots: config.showDots !== false,
      showArrows: config.showArrows !== false,
      pauseOnHover: config.pauseOnHover !== false,
    };

    this.slides = this.container.querySelectorAll(".slider__item");
    this.currentIndex = 0;
    this.isPlaying = true;
    this.startX = 0;
    this.isDragging = false;
    this.timer = null;

    this.createControls();
    this.createDots();
    this.createPlayPauseBtn();

    if (!this.config.showArrows) {
      this.nextBtn.style.display = "none";
      this.prevBtn.style.display = "none";
    }

    if (!this.config.showDots) {
      this.dotsContainer.style.display = "none";
    }

    this.nextBtn.addEventListener("click", () => {
      this.nextSlide();
    });

    this.prevBtn.addEventListener("click", () => {
      this.prevSlide();
    });

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.currentIndex = index;
        this.goToSlide(this.currentIndex);
      });
    });

    this.startAutoplay();

    this.playPauseBtn.addEventListener("click", () => {
      this.togglePlayPause();
    });

    this.container.addEventListener("mousedown", (event) => {
      this.startX = event.clientX;
      this.isDragging = true;
    });

    this.container.addEventListener("mouseup", (event) => {
      if (!this.isDragging) return;
      this.isDragging = false;

      const endX = event.clientX;
      const diff = endX - this.startX;

      if (diff > 50) {
        this.prevSlide();
      } else if (diff < -50) {
        this.nextSlide();
      }
    });

    this.container.addEventListener("touchstart", (event) => {
      this.startX = event.touches[0].clientX;
      this.isDragging = true;
    });

    this.container.addEventListener("touchend", (event) => {
      if (!this.isDragging) return;
      this.isDragging = false;

      const endX = event.changedTouches[0].clientX;
      const diff = endX - this.startX;

      if (diff > 50) {
        this.prevSlide();
      } else if (diff < -50) {
        this.nextSlide();
      }
    });

    if (this.config.pauseOnHover) {
      this.container.addEventListener("mouseenter", () => {
        if (this.isPlaying) {
          this.pauseSlider();
        }
      });

      this.container.addEventListener("mouseleave", () => {
        if (this.isPlaying) {
          this.startAutoplay();
        }
      });
    }
  }

  createControls() {
    this.prevBtn = document.createElement("button");
    this.prevBtn.className = "slider__button slider__button--prev";
    this.prevBtn.textContent = "<";
    this.container.appendChild(this.prevBtn);

    this.nextBtn = document.createElement("button");
    this.nextBtn.className = "slider__button slider__button--next";
    this.nextBtn.textContent = ">";
    this.container.appendChild(this.nextBtn);
  }

  createDots() {
    this.dotsContainer = document.createElement("div");
    this.dotsContainer.className = "slider__dots";
    this.container.appendChild(this.dotsContainer);

    this.dots = [];
    this.slides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.className = "slider__dot";
      if (index === 0) {
        dot.classList.add("slider__dot--active");
      }
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    });
  }

  createPlayPauseBtn() {
    this.playPauseBtn = document.createElement("button");
    this.playPauseBtn.className = "slider__play-pause";
    this.playPauseBtn.textContent = "⏸";
    this.container.appendChild(this.playPauseBtn);
  }

  goToSlide(index) {
    this.slides.forEach((slide) => {
      slide.style.transform = `translateX(${index * -100}%)`;
    });
    this.updateDots();
  }

  updateDots() {
    this.dots.forEach((dot) => {
      dot.classList.remove("slider__dot--active");
    });
    this.dots[this.currentIndex].classList.add("slider__dot--active");
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(this.currentIndex);
  }

  startAutoplay() {
    this.timer = setTimeout(() => {
      this.nextSlide();
      this.startAutoplay();
    }, this.config.interval);
  }

  pauseSlider() {
    clearTimeout(this.timer);
  }

  playSlider() {
    this.startAutoplay();
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pauseSlider();
      this.playPauseBtn.textContent = "▶";
      this.isPlaying = false;
    } else {
      this.playSlider();
      this.playPauseBtn.textContent = "⏸";
      this.isPlaying = true;
    }
  }
}

// Create two sliders
const slider1 = new Slider(document.querySelector(".slider"), {
  interval: 2000,
  pauseOnHover: false,
});

const slider2 = new Slider(document.querySelector(".slider-2"), {
  interval: 4000,
  pauseOnHover: true,
});
