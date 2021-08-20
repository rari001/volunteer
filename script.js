$(function() {
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

  $('.header-right2').click(function() {
    $('#responsive-header').fadeIn();
  });
  $('#responsive-header').click(function() {
    $('#responsive-header').fadeOut();
  });
});
