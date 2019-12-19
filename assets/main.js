$(window).on('load', function() {
  $('.overlay').css('width', '0');
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');
  });
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

function changecolor(color) {
  $('html, body').css('background-color', color);
  if (color == "yellow" || color == "white") {
    $('*').css('color', 'black');
    $('.svg').css('fill', 'black');
    $('*').css('border-color', 'black');
    $('.gumroad-button').css('cssText', 'background-color:' + color + '!important; color: black !important; border-color: black;');
  } else {
    $('*').css('color', 'white');
    $('.svg').css('fill', 'white');
    $('*').css('border-color', 'white');
    $('.gumroad-button').css('cssText', 'background-color:' + color + '!important; color: white !important; border-color: white;');
  }
}
