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

/* Switching between dark and light mode */
function switchTheme() {
  document.getElementById("transcript-container").classList.toggle("dark");
  document.getElementById("transcript-container").classList.toggle("light");
  let title = document.getElementById("theme-button").firstElementChild;
  if (title.innerHTML == "Change to Light Mode") {
    /* Now in Light Mode */
    title.innerHTML = "Change to Dark Mode";
    document.getElementById("light_ver").style.display = "inline";
    document.getElementById("dark_ver").style.display = "none";
    document.getElementById("transcript-container").style.backgroundColor = "#e0f8cf";
    document.getElementById("transcript-container").style.border = "2px solid #071821";
    $(function() {
      if ($(window).width() <= 992) {
        document.getElementById("mobile_day").style.display = "none";
        document.getElementById("mobile_night").style.display = "inline";
      }
    });
  } else {
    /* Now in Dark Mode */
    title.innerHTML = "Change to Light Mode";
    document.getElementById("light_ver").style.display = "none";
    document.getElementById("dark_ver").style.display = "inline";

    document.getElementById("transcript-container").style.backgroundColor = "#071821";
    document.getElementById("transcript-container").style.border = "2px solid #e0f8cf";
    $(function() {
      if ($(window).width() <= 992) {
        document.getElementById("mobile_day").style.display = "inline";
        document.getElementById("mobile_night").style.display = "none";
      }
    });
  }
}
