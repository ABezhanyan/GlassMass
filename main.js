$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(200);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(200);
    $('html').removeClass('no-scroll');
});