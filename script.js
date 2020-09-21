window.addEventListener("load", () => {

    const button = $('#goToTop');

    $(window).scroll( () => {
        /* Class added when scroll > 500px from top */
        if ($(window).scrollTop() > 500 ) {
            button.addClass('show');
        } else {
            button.removeClass('show');
        }
    } )
   

    button.on('click', () => {
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

})