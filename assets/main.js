$(window).on('load', function() {
  $('.overlay').css('width', '0');
});

$(document).ready(function() {
  $('a').click(function(e) {
    if ($(this).attr('target') != "_blank") {
      e.preventDefault();
      $('.overlay').css('left', 'initial');
      $('.overlay').css('right', '0');
      $('.overlay').css('width', '100%');
      var href = $(this).attr('href');
      setTimeout(function() {
        window.location = href;
      }, 150);
      return false;
    }
  });
});
