let allServices = document.querySelectorAll(".services");
let boxServ = document.querySelector(".box-serv")
let descServ = document.querySelector(".desc-serv")

// ! ================== tab services ==================
let serviceImg = document.querySelectorAll(".service-img");
let serviceDetails = document.querySelectorAll(".service-details");
serviceImg[0].classList.add("active")
serviceImg.forEach((items) => {
  items.onclick = function () {
    serviceImg.forEach((items) => {
      items.classList.remove("active");
    });
    items.classList.add("active");
    const targetTab = "." + this.getAttribute("data-tab");
    serviceDetails.forEach((items) => items.classList.remove("active"));
    document.querySelector(targetTab).classList.add("active");
  };
});

// ! ================== increment counter when scroll top ==================
let counterSection = document.querySelector(".counter-section");
let counterTag = document.querySelectorAll(".counter-section h2");
let stopCounter = false;
let speed = 1300;
function incrementCounter() {
  if (
    this.scrollY >= counterSection.offsetTop - 200 &&
    this.scrollY <= counterSection.offsetTop + counterSection.offsetHeight
  ) {
    counterTag.forEach((el) => counter(el));
  }
}
window.addEventListener("loading", incrementCounter);
window.addEventListener("scroll", incrementCounter);
function counter(el) {
  setInterval(() => {
    let target = Number(el.getAttribute("data-count"));
    let numContent = Number(el.textContent);
    let increase = target / speed;
    if (target > numContent) {
      el.textContent = Math.ceil(increase + numContent);
    }
  });
}