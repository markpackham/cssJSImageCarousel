// data attributes are great since it lowers the risk of overlap between classes and the javascript
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // either go to next image or previous image depending on text
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      // the index of our very last element
      newIndex = slides.children.length - 1;
    }

    if (newIndex >= slides.children.length) {
      // we have passed the last slide so must loop back to the first
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
