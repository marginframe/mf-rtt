// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(function() {
  $('#main-banner .main-slide').superslides({
    inherit_width_from: '.main-slide',
    inherit_height_from: '.main-slide',
    pagination: false
  });
});