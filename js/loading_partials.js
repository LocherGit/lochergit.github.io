/* Loading Partials */
$(function() {
  var includes = $("[data-include]");
  jQuery.each(includes, function() {
    var file = "/html_partials/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});
