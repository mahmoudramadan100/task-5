const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 550) {
        navbar
            .classList
            .add('navbar-scroll');
    } else {
        navbar
            .classList
            .remove('navbar-scroll');
    }
};


// Navbar Mobile
const toggleMenu = () => {
    document
        .body
        .classList
        .toggle("open");
};
// Header Slider

var swiper = new Swiper(".slider", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


// Package and offers slider
var swiper = new Swiper(".package", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});

$(document).ready(()=>{
    let isMenuAlreadyOpen = false;
    $('.navbar-burger').on('click',()=>{
        $('body').css("overflow",isMenuAlreadyOpen?"auto":"hidden")
        isMenuAlreadyOpen = !isMenuAlreadyOpen
    })
});

// Network Section Slider
var swiper = new Swiper(".network", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination-1",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});



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
