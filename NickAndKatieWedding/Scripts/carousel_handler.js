
//var $item = $('.carousel .item');
var $wHeight = $(window).height();

//new code
var $wWidth = $(window).width();
if ($wWidth <= 768) {
    var $item = $('#carousel_sm .item');
} else {
    var $item = $('#carousel .item');
}


// end new code

$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function () {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image': 'url(' + $src + ')',
        'background-color': $color
    });
    $(this).remove();
});

$(window).on('resize', function () {
    $wHeight = $(window).height();
    $item.height($wHeight);
});

$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});