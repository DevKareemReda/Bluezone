//! toggle Tabs
document.addEventListener("DOMContentLoaded", function () {
  var iso = new Isotope(".row.mt-5", {
    itemSelector: ".col-md-4",
    layoutMode: "fitRows",
  });
  var filterButtons = document.querySelectorAll(".projects-inner a");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      var filterValue = this.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
    });
  });
});

//! show data projects
const projectsData = [
  {
    id: 1,
    images: "images/projects01.jpg",
    title: "bazarAlkuwait",
    category: "app"
  },
  {
    id: 2,
    images: "images/projects02.jpg",
    title: "trendatapp",
    category: "app"
  },
  {
    id: 3,
    images: "images/projects03.jpg",
    title: "Saydahapp",
    category: "app"
  },
  {
    id: 4,
    images: "images/projects11.jpg",
    title: "greensaloutions",
    category: "web"
  },
  {
    id: 5,
    images: "images/projects05.jpg",
    title: "Mymallapp",
    category: "app"
  },
  {
    id: 6,
    images: "images/projects06.jpg",
    title: "hunter",
    category: "app"
  },
  {
    id: 7,
    images: "images/projects07.jpg",
    title: "OpenShopplatform",
    category: "app"
  },
  {
    id: 8,
    images: "images/projects08.jpg",
    title: "monasbaAPP",
    category: "app"
  },
  {
    id: 9,
    images: "images/projects09.jpg",
    title: "mistaryilw",
    category: "app"
  },
  {
    id: 10,
    images: "images/projects10.jpg",
    title: "shantongulf",
    category: "web"
  },
  {
    id: 11,
    images: "images/projects12.png",
    title: "ERPsystem",
    category: "erp"
  },
  {
    id: 12,
    images: "images/projects04.jpg",
    title: "arkanapp",
    category: "app"
  },
]

const projects = document.querySelector(".projects");
projectsData.map(items => {
  projects.innerHTML += `
  <div class="col-md-4 col-sm-6 col-xs-12 mb-4 ${items.category}">
    <div class="overlay overflow-hidden">
      <img
      src=${items.images}
      alt=${items.title.split(" ", 2)}
      class="img-fluid"
    />
    <div class="overlay-inner">
      <a href="product.html?title=${items.title}" data-to=${items.title}></a>
    </div>
    </div>
  </div>
  `
})