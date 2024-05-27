$("#open-btn").click(function () {
  $("#open-btn").css("width", "0px");
  $("#sidebar").addClass("open-sidebar");
  $("#close-btn").css("rotate", "0deg");

  $("body").addClass("disable-scroll");
});

$("#close-btn").click(function () {
  $("#close-btn").css("rotate", "180deg");
  $("#sidebar").removeClass("open-sidebar");
  $("#open-btn").css("width", "50px");

  $("body").removeClass("disable-scroll");
});

$(window).resize(function () {
  const windowWidth = $(window).width();
  let pos_1 = Number($("#open-btn").css("right").slice(0, -2)) + 60;
  let pos_2 = Number($("#open-btn").css("right").slice(0, -2));

  if (windowWidth <= 760) {
    if ($("#open-btn").hasClass("collapse-menu") === false) {
      $("#nav-list").animate({ right: pos_1 }, 1000);
      $("#nav-list").animate({ width: "toggle" }, 1000);
      $("#open-btn").addClass("collapse-menu");
      $("#open-btn").css("rotate", "0deg");
    }
  } else {
    if ($("#open-btn").hasClass("collapse-menu")) {
      $("#nav-list").animate({ width: "toggle" }, 1000);
      $("#nav-list").animate({ right: pos_2 }, 1000);
      $("#open-btn").removeClass("collapse-menu");
      $("#open-btn").css("rotate", "90deg");
    }
  }
});
