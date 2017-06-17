////$('.bio span').hide();

//$('a').click(function (e) {

//    e.preventDefault();
//    $('div').eq($(this).index()).show();
//    $('div').not($('div').eq($(this).index())).hide();
//});


var $party = $('#party');
$party.on('show', '.collapse', function () {
    $party.find('.collapse.in').collapse('hide');
});