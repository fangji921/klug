$(document).ready(function () {
    //메인섹션 고정
    gsap.to(".sec_1 .main .layer", {
        scrollTrigger: {
            trigger: ".sec_1 .main",
            start: "top top",
            end: "300% top",
            pin: true,
            scrub: true,
            pinSpacing: false,
        },
        backgroundColor: "rgba(0,0,0,1)"
    }); //배경 핀아웃

    gsap.to(".sec_1 .bg-layer", {
        scrollTrigger: {
            trigger: ".sec_1 .bg-layer",
            start: "top top",
            end: "200% top",
            scrub: true,
        },
        scale: 1.2
    }); //배경 줌인

    //메인 타이포
    gsap.utils.toArray(".sec_1 h2").forEach(item => {
        const depth = item.dataset.depth;
        const startPoint = window.innerHeight * depth

        gsap.to(item, {
            scrollTrigger: {
                trigger: ".sec1 .main",
                start: `${startPoint} top`,
                end: `${startPoint + window.innerHeight / 2} top`,
                scrub: true
            },
            y: 0,
            opacity: 1
        })
    }); //typo floating

    //white pin out scrubing
    gsap.to(".sec_1 .klug", {
        scrollTrigger: {
            trigger: ".sec_1 .klug",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        },
        backgroundColor: "rgba(255,255,255,1)"
    });

    //클럭섹션 윈도우 높이 50% 스크롤 동안 잠시 고정 
    gsap.to(".sec_1 .klug .layer", {
        scrollTrigger: {
            trigger: ".sec_1 .klug .layer",
            start: "top top",
            end: "50% top",
            pin: true,
        },
    });

    //gsap toggle class
    gsap.to(".sec_1 .klug .klug p", {
        scrollTrigger: {
            trigger: ".sec_1 .klug .layer",
            start: "top top",
            end: "100% top",
            toggleClass: {
                targets: ".klug p",
                className: "text_move"
            },
        },
    })
    gsap.to(".sec_1 .klug .img-box", {
        scrollTrigger: {
            trigger: ".sec_1 .klug .layer",
            start: "top top",
            end: "100% top",
            toggleClass: {
                targets: ".klug .img-box",
                className: "klug_vibe"
            },
        },
    });

    //////////////////////////
    ///section2 parralexing///
    //////////////////////////
    gsap.utils.toArray(".sec_2 .text-box").forEach((box) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box.parentNode,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
            },
            y: "-20px"
        })
    })

    /////////////////////////
    ///section3 matchMedia///
    /////////////////////////

    ScrollTrigger.matchMedia({

        "(min-width: 768px)": function () {
            //desktop/클럭본체
            gsap.to(".sec_3 .con1", {
                scrollTrigger: {
                    trigger: ".sec_3 .con-wrapper",
                    scrub: true,
                    start: "10% top",
                    end: "bottom top",
                },
                x: "0%",
                y: "0%"
            })

            gsap.to(".sec_3 .con2", {
                //desktop/클럭패드
                scrollTrigger: {
                    trigger: ".sec_3 .con-wrapper",
                    scrub: true,
                    markers:true,
                    start: "10% top",
                    end: "bottom top",
                },
                x: "0%",
                y: "0%"
            })

        },

        "all": function () {
            gsap.to(".sec_3", {
                //공통 이벤트/화면 고정
                scrollTrigger: {
                    trigger: ".sec_3 .con-wrapper",
                    pin: true,
                    scrub: true,
                    start: "top top",
                    end: "bottom top",
                }
            })
            gsap.to(".sec_3 .circle", {
                //공통 이벤트/점 이펙트
                scrollTrigger: {
                    trigger: ".sec_3 .con-wrapper",
                    start: "top top",
                    end: "bottom top",
                },
                scale: 1
            })
            gsap.to(".sec_3 .line", {
                //공통 이벤트/선 이펙트
                scrollTrigger: {
                    trigger: ".sec_3 .con-wrapper",
                    start: "top top",
                    end: "bottom top",
                },
                scale: 1
            })
            gsap.to(".sec_3 .text-box p", {
                //공통 이벤트/텍스트 나타남
                scrollTrigger: {
                    trigger: ".sec_3 .con-wrapper",
                    start: "top top",
                    end: "bottom top",
                },
                opacity: 1
            })
        }

    });

    //section4 
    const item = document.querySelectorAll(".sec_4 .text-box");
    let itemsOffset = new Array;

    item.forEach(box => {
        let itemOffset = box.offsetTop;
        let parentOffset = box.parentNode.offsetTop;
        itemsOffset.push(itemOffset - parentOffset);
    })

    function imgFadeChanging(idx) {
        $(".img-wrapper .img-box").eq(idx).stop().fadeIn().siblings().stop().fadeOut()
    }

    ScrollTrigger.matchMedia({
        "(min-width: 1200px)": function () { // desktop
            gsap.utils.toArray(".sec_4 .text-box").forEach(txt => {
                gsap.to(txt, {
                    scrollTrigger: {
                        trigger: txt,
                        // markers: true,
                        onEnter: () =>
                            imgFadeChanging(txt.dataset.idx),
                        onEnterBack: () =>
                            imgFadeChanging(txt.dataset.idx),
                    },
                }) //to
            }) //utils
        },
        "(max-width: 1199px)": function () { // mobile
            gsap.utils.toArray(".sec_4 .text-box").forEach(txt => {
                gsap.to(txt, {
                    scrollTrigger: {
                        trigger: txt,
                        start: "top 380px",
                        end: "bottom top",
                        onEnter: () =>
                            imgFadeChanging(txt.dataset.idx),
                        onEnterBack: () =>
                            imgFadeChanging(txt.dataset.idx),
                    },
                }) //to
            }) //utils
        },
        "all": function () { // all 
            ScrollTrigger.create({
                trigger: ".container",
                start: "top top",
                end: "bottom bottom",
                pin: ".sec_4 .img-wrapper",
                pinSpacing: false,
            });
        }

    });
})