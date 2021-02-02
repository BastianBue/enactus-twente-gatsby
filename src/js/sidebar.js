import $ from "jquery";

$(function () {
  window.onload = () => {
    $(".navbar-toggler").on("click", function () {
      $("#sidebar, #content").toggleClass("active");
      $("body").toggleClass("overflow-y-hidden");
    });
    window.addEventListener("resize", () => {
      $(".navbar-toggler").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
        $("body").toggleClass("overflow-y-hidden");
      });
    });
  };
});
