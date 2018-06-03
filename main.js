$(function(){
    let menuLink = $('.menu-link');
    let menu = $('menu');
    let close = $('.close-btn');
    let navLink = $('li a');

    menuLink.click(function(){
        menu.toggleClass('active-menu');
    });

    close.click(function(){
        menu.toggleClass('active-menu');
    });

    navLink.on('click', function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top;
        $('html, body').animate({scrollTop: top}, 200);
    });
});