$(document).ready(function () {
  // $(".menu-items .icon_search, .icon_close").click(function () {
  //   $(".menu-items, .menu-search" ).toggleClass("hidden");
  // })
// Мы работаем с дом, для этого нам нужно, чтоб скрипт находил, как вариант скрипт сожно писать в конце сайта)
  $(".menu-items .icon_search, .icon_close").click(function () {
    $(this).parent().addClass("fade");
    $(".black_screen" ).addClass("fade");
    setTimeout(function () {
      $(".menu-items, .menu-search, .black_screen" ).toggleClass("hidden");
    },500);
    setTimeout(function () {
      if ($(".menu-items").hasClass("hidden")) {
        $(".menu-search" ).removeClass("fade");
        $(".black_screen" ).removeClass("fade");
      } else {
        $(".menu-items" ).removeClass("fade");
      }
    },600);
  })
  // $(".icon_close").click(function () {
  //   $(".menu-search").addClass("fade");
  //   setTimeout(function () {
  //     $(".menu-items, .menu-search" ).toggleClass("hidden");
  //   },500);
  //   setTimeout(function () {
  //     $(".menu-items" ).removeClass("fade");
  //   },600);
  // })
});
