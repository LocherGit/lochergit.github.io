/* Enable Scroll-triggers */
$(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= $("#footer").offset().top - $(window).height() || $(window).scrollTop() <= 50) {
      document.getElementById("prev_chapter").style.pointerEvents = "auto";
      document.getElementById("next_chapter").style.pointerEvents = "auto";
      document.getElementById("prev_chapter").style.opacity = "0.5";
      document.getElementById("next_chapter").style.opacity = "0.5";
      document.getElementById("prev_chapter").style.transition = "opacity 1s";
      document.getElementById("next_chapter").style.transition = "opacity 1s";
      document.getElementById("prev_chapter").style.display = "inline";
      document.getElementById("next_chapter").style.display = "inline";
    } else {
      document.getElementById("prev_chapter").style.opacity = "0.0";
      document.getElementById("next_chapter").style.opacity = "0.0";
      document.getElementById("prev_chapter").style.pointerEvents = "none";
      document.getElementById("next_chapter").style.pointerEvents = "none";
    }
  });
});
