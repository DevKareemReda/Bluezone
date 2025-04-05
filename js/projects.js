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
