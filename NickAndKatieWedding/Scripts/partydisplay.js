$('.bio span').hide();

$('.bio img').click(function (e) {

    e.preventDefault();
    // hide all span
    var $this = $(this).parent().find('span');
    $(".bio span").not($this).hide();

    // here is what I want to do
    $this.toggle();

});