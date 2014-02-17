// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$("#main-banner .owl-carousel").owlCarousel({

  navigation : false, // Show next and prev buttons
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem:true,
  pagination: false

  // "singleItem:true" is a shortcut for:
  // items : 1, 
  // itemsDesktop : false,
  // itemsDesktopSmall : false,
  // itemsTablet: false,
  // itemsMobile : false

});