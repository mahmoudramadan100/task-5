// scroll to top
$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
});
//Click event to scroll to top
$('.scroll-top').click(function(){
    $('html, body').animate({scrollTop : 0},360);
    return false;
});
