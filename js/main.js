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



// let btn = document.getElmentById('scroll-top');
// window.onScroll = function() {
//     if(scrollY >= 800) {
//         btn.style.display = "block"
//     } else {
//         btn.style.display = "none"
//     }
// }

const toggleMenuOpen = () => document.body.classList.toggle("open");

// $(document).ready(()=>{
//     let isMenuAlreadyOpen = true;
//     $('.navbar-burger').on('click',()=>{
//         $('body').css("overflow",isMenuAlreadyOpen?"auto":"hidden")
//         isMenuAlreadyOpen = !isMenuAlreadyOpen
//     })
// });
