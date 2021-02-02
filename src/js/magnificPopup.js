import $ from "jquery";
import "magnific-popup";

$(document).ready(function () {
  $(".image-link").magnificPopup({ type: "image" });
});

$(".video").magnificPopup({
  type: "iframe",

  iframe: {
    markup:
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '<div class="mfp-title">Some caption</div>' +
      "</div>",
  },
  callbacks: {
    markupParse: function (template, values, item) {
      values.title = item.el.attr("title");
    },
  },
});

$(".gallery-image").magnificPopup({
  type: "image",
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
  image: {
    verticalFit: true,
  },
  zoom: {
    enabled: true,
    duration: 300, // don't foget to change the duration also in CSS
  },
  callbacks: {
    markupParse: function (template, values, item) {
      values.title = item.el.attr("title");
    },
  },
});
