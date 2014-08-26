jQuery(document).ready(function($) {

  $('.elapsed').animate({width: "100%"}, 2000, "linear");
  $('.remaining').animate({width: "0%"}, 2000, "linear");

  $('.item').on('focus', 'input', function(event) {
    event.preventDefault();
    $('.selected').removeClass('selected');
    $(this).parent('.item').addClass('selected');
  });

  $('.sort').on('mousedown', function(event) {
    event.preventDefault();
    $(':focus').blur();
    $('.selected').removeClass('selected');
    $(this).closest('.item').addClass('sorting selected');
  });
  $('.sort').on('mouseup', function(event) {
    event.preventDefault();
    $('.sorting').removeClass('sorting');
  });


});
