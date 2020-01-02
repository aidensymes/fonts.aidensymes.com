$(window).on('load', function() {
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

function changecolor(color) {
  $('html, body').css('background-color', color);
  if (color == "yellow" || color == "white") {
    $('h1, h2, p, .font__entry').css('color', 'black');
    $('.svg').css('fill', 'black');
    $('.font__entry, .font__buy__info, footer, .header__color__picker').css('border-color', 'black');
    $('.gumroad-button').css('cssText', 'background-color:' + color + '!important; color: black !important; border-color: black;');
  } else {
    $('h1, h2, p, .font__entry').css('color', 'white');
    $('.svg').css('fill', 'white');
    $('.font__entry, .font__buy__info, footer, .header__color__picker').css('border-color', 'white');
    $('.gumroad-button').css('cssText', 'background-color:' + color + '!important; color: white !important; border-color: white;');
  }
}
