$(document).ready(function() {
    "use strict";
    var t, a, s = !1;
    $(".header");
    function n() {
        $(".page_menu");
        var e = $(".page_menu_content");
        TweenMax.to(e, .3, {
            height: 0
        }),
        s = !1
    }
    991 < window.innerWidth && s && n(),
    $(".custom_dropdown_placeholder").length && $(".custom_list").length && (t = $(".custom_dropdown_placeholder"),
    a = $(".custom_list")),
    t.on("click", function(e) {
        a.hasClass("active") ? a.removeClass("active") : a.addClass("active"),
        $(document).one("click", function e(t) {
            $(t.target).hasClass("clc") ? $(document).one("click", e) : a.removeClass("active")
        })
    }),
    $(".custom_list a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().index();
        t.text($(this).text()).css("opacity", "1"),
        a.hasClass("active") ? a.removeClass("active") : a.addClass("active")
    }),
    $("select").on("change", function(e) {
        t.text(this.value),
        $(this).animate({
            width: t.width() + "px"
        })
    }),
    $(".page_menu").length && $(".page_menu_content").length && ($(".page_menu"),
    $(".page_menu_content"),
    $(".menu_trigger").on("click", function() {
        var e;
        s ? n() : ($(".page_menu"),
        e = $(".page_menu_content"),
        TweenMax.set(e, {
            height: "auto"
        }),
        TweenMax.from(e, .3, {
            height: 0
        }),
        s = !0)
    }),
    $(".page_menu_item").length) && $(".page_menu_item").each(function() {
        var t = $(this);
        t.hasClass("has-children") && t.on("click", function(e) {
            e.preventDefault(),
            e.stopPropagation();
            e = t.find("> ul");
            e.hasClass("active") ? (e.toggleClass("active"),
            TweenMax.to(e, .3, {
                height: 0
            })) : (e.toggleClass("active"),
            TweenMax.set(e, {
                height: "auto"
            }),
            TweenMax.from(e, .3, {
                height: 0
            }))
        })
    });
    var e = $(window)
      , i = e.scrollTop();
    e.scroll(function() {
        e.scrollTop() > i ? $(".header").addClass("scrollUp") : $(".header").removeClass("scrollUp"),
        i = e.scrollTop()
    }),
    $(".features-carousel").owlCarousel({
        dots: !0,
        autoplay: !0,
        speed: 300,
        autoplaySpeed: 2e3,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    }),
    $(".brand-carousel").owlCarousel({
        dots: !1,
        autoplay: !0,
        speed: 10,
        autoplaySpeed: 1e3,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            },
            1200: {
                items: 8
            }
        }
    }),
    $("#myTab li").on("click", function() {
        $(this).addClass("active").siblings("li").removeClass("active")
    }),
    $("#filtr-container").filterizr({
        animationDuration: .4
    })
});
var mImg = document.getElementById("mImg")
  , smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function() {
    mImg.src = smallimg[0].src
}
,
smallimg[1].onclick = function() {
    mImg.src = smallimg[1].src
}
,
smallimg[2].onclick = function() {
    mImg.src = smallimg[2].src
}
,
smallimg[3].onclick = function() {
    mImg.src = smallimg[3].src
}
,
smallimg[4].onclick = function() {
    mImg.src = smallimg[4].src
}
;
