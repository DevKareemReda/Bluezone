document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector(".row.mt-5");

  imagesLoaded(grid).on('always', function () {
    var iso = new Isotope(grid, {
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
});