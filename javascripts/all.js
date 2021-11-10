"use strict";

// banner - vegas輪播
$(".banner").vegas({
  slides: [{
    src: "./imgs/slider2.jpg"
  }],
  overlay: "./imgs/02.png",
  // 是否顯示下方時間bar
  timer: false,
  // 自動開始撥放
  autoplay: true,
  // 動畫
  transition: "fade",
  // 動畫時間(漸變)
  transitionDuration: 3000,
  // 一張圖展示多久
  delay: 7000,
  //圖片動畫
  animation: "random",
  animationDuration: "10000"
}); // loading page

$(window).on("load", function () {
  $("#loading_page").fadeOut();
}); //監聽頭部是否sticky

$(function () {
  checkHeaderIsSticky();
});
$(function () {
  $(window).on("scroll", function () {
    checkHeaderIsSticky();
  });
});

function checkHeaderIsSticky() {
  var isStickyTop = $("body").offset().top - $(window).scrollTop() == 0 ? true : false;

  if (isStickyTop) {
    $("header").removeClass("is_sticky");
  } else {
    $("header").addClass("is_sticky");
  }
} //頭部click scroll to


$(function () {
  $(".menu_list a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var targetToTop = $(target).offset().top;
    $("html,body").animate({
      scrollTop: targetToTop - 48
    }, 0);
  });
}); //頭部手機選單toggle

$(function () {
  $(".menu_toggle").on("click", function (e) {
    e.preventDefault();
    toggleMenuList(e);
    $(document).one("click", function () {
      hideMenuList();
    });
  });
});

function toggleMenuList(e) {
  e.stopPropagation();
  $(".menu_list").toggle();
}

function hideMenuList() {
  $(".menu_list").hide();
} //to top


$(function () {
  $("#to-top").on("click", function () {
    toTop();
  });
});

function toTop() {
  $("body,html").animate({
    scrollTop: 0
  }, 0);
} //wow.js


new WOW().init(); //swiper {

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
