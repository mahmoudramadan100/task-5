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


// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}
loop();

function isElementInViewport(el) {
  
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


// let photo= document.querySelector('.photo');

// function scrollApp(e) {
//     if(window.scrollY >= e.offsetTop) {
//         element.css('opacity','1');
//     } else {
//         element.css('opacity','0');

//     }
// }
// scrollApp(photo)

//     $(window).scroll(function () {
//     if ($(this).scrollDown() > 1726) {
//       $('.photo').animate({
//         with: "4500px"
//       },500);
//     } else {
//       $('.photo').fadeOut('slow');
//     }
//   });

//   $('.photo').click(function () {
//     $('html, body').animate({
//       scrollTop: 0
//     }, 1500, 'easeInOutExpo');
//     return false;
//   });