
$(document).ready(function () {
    $('#' + $('default').data('rel')).fadeIn('slow');
});

    $(".link").click(function (e) {
        e.preventDefault();
        $('.content-container div').fadeOut('slow');
        $('#' + $(this).data('rel')).fadeIn('slow');
    });