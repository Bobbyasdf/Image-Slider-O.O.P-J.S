class Slider {

    slideIndex = 1;
    slides;
    dots;
  
    constructor(index = 1, sel) {
      this.slideIndex = index;
      const container = document.querySelector(sel);
      this.slides = container.querySelectorAll(".slide");
      const dots = container.querySelector(".dotContainer");
      dots.innerHTML = "";
      this.dots = [];
      for(let i = 0; i < this.slides.length; i++)
      {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", e => this.currentSlide(i + 1));
        dots.appendChild(dot);
        this.dots[i] = dot;
      }
      const nav = container.querySelector(".nav");
      nav.innerHTML = "";
      const prev = document.createElement("a");
      prev.className = "prev";
      prev.addEventListener("click", e => this.plusSlides(-1));
      prev.innerHTML = "&#10094;";
      nav.appendChild(prev);
      const next = document.createElement("a");
    next.className = "next";
    next.addEventListener("click", e => this.plusSlides(-1));
    next.innerHTML = "&#10095;";
    nav.appendChild(next);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    var i;

    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = i == this.slideIndex - 1 ? "block" : "none";
    }

    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].classList.toggle("activeDot", i == this.slideIndex-1);
    }

  }

  timer = null;
  stopSlider()
  {
    clearInterval(this.timer);
  }
  setupSlider(speed) {
    this.showSlides(this.slideIndex);

    if (speed === undefined)
      speed = 5000;

    // Sliding automation
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.plusSlides(1);
      console.log(this.slideIndex);
    }, speed);
  }
}

let quoteSlider = new Slider(1, ".quoteSlide");
quoteSlider.setupSlider(3000);
