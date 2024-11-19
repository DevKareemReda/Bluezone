$(()=> {
  new WOW().init();
  $("body").niceScroll({
    cursorcolor: "var(--primary01)", // change cursor color in hex
    cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
    cursorborder: ".1px solid var(--primary02)", // css definition for cursor border
    cursorborderradius: "5px", // border radius in pixel for cursor
    zindex: "999", // change z-index for scrollbar div
  });
})

// ! ================== sticky header ==================
let headerSticky = document.querySelector(".header-area");
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    headerSticky.classList.add('scrolled');
  } else {
    headerSticky.classList.remove('scrolled');
  }
  if (window.scrollY > 200) {
    headerSticky.classList.add('sticky');
  } else {
    headerSticky.classList.remove('sticky');
  }
});

// ! ================== open & close [ navbar ] ==================
let bars = document.querySelector(".bars");
let siteMobile = document.querySelector(".site-mobile");
let angleDown = document.querySelectorAll(".fa-angle-down");
let closeNav = document.querySelector(".mobile-close");
bars.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    siteMobile.classList.add("active");
  }
};

// slide down dropdown menu
angleDown.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      this.classList.replace("fa-angle-down", "fa-angle-up");
      this.parentElement.parentElement.classList.add("active");
    } else {
      this.classList.replace("fa-angle-up", "fa-angle-down");
      this.parentElement.parentElement.classList.remove("active");
    }
  };
});

// close navbar
closeNav.onclick = function () {
  siteMobile.classList.remove("active");
  bars.classList.remove("active");
};

// when click outside in body close navbar
window.onmouseup = function (e) {
  if (!bars.contains(e.target) && !siteMobile.contains(e.target)) {
    siteMobile.classList.remove("active");
    bars.classList.remove("active");
  }
};


// ! ================== go up ==================
let goUp = document.querySelector(".up");
window.addEventListener("scroll", function () {
  goUp.classList.toggle("active", this.scrollY > 600)
})


goUp.onclick = function () {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const currentYears = document.querySelector("span.year");
currentYears.innerHTML = new Date().getFullYear();