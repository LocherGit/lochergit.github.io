/* Loading Partials */
$(function() {
  console.log("Loading partials");
  var includes = $("[data-include]");
  jQuery.each(includes, function() {
    var file = "./html_partials/" + $(this).data("include") + ".html";
    console.log(file);
    $(this).load(file);
  });
});
