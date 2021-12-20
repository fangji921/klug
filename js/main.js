$(document).ready(function () {
    var winHeight = $(window).height();
    var pre = $(window).scrollTop();
    var hdPoint = $(".sec_1 .klug").offset().top + 2*winHeight;

    $(window).on("scroll", function () {
        var scrTop = $(this).scrollTop()
        var d = scrTop - pre;

        if (d > 0 && scrTop >= hdPoint) {
            $("header").addClass("scroll_on");
            $(".fixed-box").addClass("scroll_on");
            $("header").removeClass("scroll_active");
        } else if (d < 0 && scrTop >= hdPoint) {
            $("header").addClass("scroll_active");
        } else if (scrTop < hdPoint) {
            $("header").removeClass("scroll_on scroll_active");
            $(".fixed-box").removeClass("scroll_on");
        }

        //        if(scrTop >= $(".klug .layer").offset().top ){
        //            $(".sec_1 .klug .img_box").addClass("klug_vibe");
        //            $(".sec_1 .klug p").addClass("text_move")
        //        } else {
        //            $(".sec_1 .klug .img_box").removeClass("klug_vibe");
        //            $(".sec_1 .klug p").removeClass("text_move")
        //        }

        //$(".sec_1 .klug .img_box").removeClass("klug_vibe");
        pre = scrTop;
    });


    $(".menu-btn").on("click", function () {
        $(this).toggleClass("nav_on")
        $("nav").toggleClass("nav_on");
    })


    //    var textScr = [];
    //
    //    for (i = 0; i < $(".text_box").length; i++) {
    //        var offsets = $(".text_box").eq(i).offset().top;
    //        textScr.push(offsets)
    //    }
    //
    //    var fixStart = $(".img_wrap").offset().top;
    //    var fixEnd = textScr[4] - 300
    //
    //    var imgHeight = $(".img_wrap").height();
    //    var textScr1 = $(".text_box").eq(1).offset().top;
    //
    //
    //    var endPos = $(".text_box").last().height();
    //
    //    $(window).on("scroll", function () {
    //
    //        var scr = $(this).scrollTop();
    //        var textIndex = $(".text_box").index();
    //
    //        if (scr >= fixStart && scr < fixEnd) {
    //            $(".img_wrap").css({
    //                "position": "fixed",
    //                "bottom": "unset",
    //                "top": 0,
    //                "left": 0
    //            })
    //            $(".text_wrap").css({
    //                "paddingTop": 300
    //            })
    //        } else if (scr < fixStart) {
    //            $(".img_wrap").css({
    //                "position": "relative",
    //                "bottom": "unset"
    //            })
    //            $(".text_wrap").css({
    //                "paddingTop": 0
    //            })
    //        } else if (scr >= fixEnd) {
    //            console.log("summit")
    //            $(".img_wrap").css({
    //                "position": "absolute",
    //                "left": 0,
    //                "top": "unset",
    //                "bottom": endPos
    //            })
    //            $(".text_wrap").css({
    //                "paddingTop": 300
    //            })
    //        }
    //        console.log(fixEnd, scr)
    //
    //        for (i = 0; i < textScr.length; i++) {
    //            if (scr + 300 >= textScr[i] && scr + 300 < textScr[i + 1]) {
    //                $(".img_wrap .img_box").stop().fadeOut();
    //                $(".img_wrap .img_box").eq(i).stop().fadeIn();
    //            }
    //        }
    //    })

    $(".review-wrapper").slick({
        centerMode: true,
        centerPadding: '360px',
        slidesToShow: 1,
        //nextArrow: '.arrow_btn',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    slidetoshow: 1,
                    centerPadding: 0,
                    arrows: false
                }
            }
        ]
        /*
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    //                    centerMode: true,
                    //                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]*/

    });


}) /*end*/
