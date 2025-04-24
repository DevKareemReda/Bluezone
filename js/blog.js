let allPagination = document.querySelectorAll(".pagination li");

allPagination.forEach((items) => {
  items.onclick = function () {
    allPagination.forEach((items) => items.classList.remove("active"));
    this.classList.add("active");

    console.log(this.getAttribute("data-id"));
    document.querySelectorAll(".tab-hidden").forEach(el=>el.classList.remove("active"))
    document
      .querySelectorAll("." + this.getAttribute("data-id")).forEach(el =>el.classList.add("active"))
  };
});
