$(window).bind("load", function () {
    $('#nicky').fadeIn('slow');
});

    $(".link").click(function (e) {
        e.preventDefault();
        $('.content-container div').fadeOut('slow');
        $('#' + $(this).data('rel')).fadeIn('slow');
    });