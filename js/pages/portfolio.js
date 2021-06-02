$(".box-items").isotope({
  // options
  itemSelector: ".box-item",
  percentPosition: true,
});

// $container.imagesLoaded(function () {
//   $container.isotope({ percentPosition: true, itemSelector: ".box-item" });
//   if ($(".portfolio-items.portfolio-new").length) {
//     var s_parallax = document.getElementsByClassName("wp-post-image");
//     new simpleParallax(s_parallax);
//   }
// });

var $container = $(".portfolio-items");
$(".filters").on("click", ".btn-group", function () {
  var filterValue = $(this).find("input").val();
  $container.isotope({ filter: filterValue });
  $(".filters .btn-group label").removeClass("glitch-effect");
  $(this).find("label").addClass("glitch-effect");
});

$(".hover-animated .circle").on({
  mouseenter: function (e) {
    if ($(this).find(".ink").length === 0) {
      $(this).prepend("<span class='ink'></span>");
    }
    var ink = $(this).find(".ink");
    if (!ink.height() && !ink.width()) {
      var d = Math.max($(this).outerWidth(), $(this).outerHeight());
      ink.css({ height: d, width: d });
    }
    var x = e.pageX - $(this).offset().left - ink.width() / 2;
    var y = e.pageY - $(this).offset().top - ink.height() / 2;
    ink.css({ top: y + "px", left: x + "px" });
    ink.parent().addClass("hovered");
  },
  mouseleave: function (e) {
    var ink = $(this).find(".ink");
    var x = e.pageX - $(this).offset().left - ink.width() / 2;
    var y = e.pageY - $(this).offset().top - ink.height() / 2;
    ink.css({ top: y + "px", left: x + "px" });
    ink.parent().removeClass("hovered");
  },
});
