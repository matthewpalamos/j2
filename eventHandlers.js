

$(".portfolio").click(function() {
    $('html,body').animate({
        scrollTop: $(".portfolioPage").offset().top},
        'slow');
});


$(".dropdown-menu").click(function() {
    $('html,body').animate({
        scrollTop: $(".services").offset().top},
        'slow');
});


$(".visit").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});