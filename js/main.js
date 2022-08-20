'use strict';

(function($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*--------------------------
        Event Slider
    ----------------------------*/
    $(".event__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });

    /*--------------------------
        Videos Slider
    ----------------------------*/
    $(".videos__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            576: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

    $("#countdown-time").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='countdown__item'><span>%D</span> <p>Days</p> </div>" + "<div class='countdown__item'><span>%H</span> <p>Hours</p> </div>" + "<div class='countdown__item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='countdown__item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Barfiller
	--------------------*/
    $('#bar1').barfiller({
        barColor: "#ffffff",
    });

    $('#bar2').barfiller({
        barColor: "#ffffff",
    });

    $('#bar3').barfiller({
        barColor: "#ffffff",
    });

    $('#bar4').barfiller({
        barColor: "#ffffff",
    });

    $('#bar5').barfiller({
        barColor: "#ffffff",
    });

    $('#bar6').barfiller({
        barColor: "#ffffff",
    });

    $('#bar7').barfiller({
        barColor: "#ffffff",
    });

    $('#bar8').barfiller({
        barColor: "#ffffff",
    });

    /*-------------------
		Nice Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#111111",
        cursorwidth: "5px",
        background: "#e1e1e1",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

})(jQuery);

//FILTRO IMG
(function() {
    $(document).ready(function() {
        $(".btn-menu").click(function(e) {
            e.preventDefault();
            var filtro = $(this).attr("data-filter");

            if (filtro == "todos") {
                $(".box-img").show(500);
            } else {
                $(".box-img").not("." + filtro).hide(500);
                $(".box-img").filter("." + filtro).show(500);
            }
        });

        $("ul li").click(function() {
            $(this).addClass("active-bar").siblings().removeClass("active-bar");
        });
    });
}())