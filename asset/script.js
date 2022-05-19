$(document).ready(function () {
    // side btn
$('.side-btn').click(function(){
    $(".side-nav-links").slideToggle(1500);
    $(".side-btn").toggleClass('change')
})

// nav btn

$('.nav-btn').click(function(){
    $('.side-nav').toggleClass('margin')
    $(".nav-btn").toggleClass("change")
    $("main").toggleClass("max-width")
})

$('.songs-centre').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 2000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



})
