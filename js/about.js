const allAccordingBanel = document.querySelectorAll(".according-head");

allAccordingBanel[0].nextElementSibling.style.maxHeight = allAccordingBanel[0].nextElementSibling.scrollHeight + "px"
allAccordingBanel[0].classList.add("active");

allAccordingBanel.forEach(items => {
  items.onclick = function () {
    allAccordingBanel.forEach(el => {
      if (el !== items) {
        el.classList.remove("active")
        el.nextElementSibling.style.maxHeight = null;
      }
    })
    if (!this.classList.contains("active")) {
      this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px"
      this.classList.add("active");
    } else {
      this.nextElementSibling.style.maxHeight = null;
      this.classList.remove("active");
    }
  }
});

window.addEventListener("resize", function () {
  allAccordingBanel.forEach(items => {
    if (items.classList.contains("active")) {
      items.nextElementSibling.style.maxHeight = items.nextElementSibling.scrollHeight + "px"
    }
  })
})