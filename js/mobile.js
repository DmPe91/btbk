$(window).on("resize", function () {
  var w = $(window).width();
  if (w <= 480) {
    // Если ширина окна меньше, либо равна 600
    $(".js-button_mobile").insertAfter(".js-text_mobile");
    $(".js-button-result__mobile").insertAfter(".js-block-result__mobile");
    $(".js-button-project_mobile").insertAfter(".js-text-project_mobile");
    $(".js-button-contacts__mobile").insertAfter(".js-text-contacts__mobile");
    $(".portfolio-js-button__mobile").insertAfter(".portfolio-js-text__mobile");
    $(".project-js-button__mobile").insertAfter(".project-js-text__mobile");
    $(".service-js-button__mobile").insertAfter(".service-js-text__mobile");
  } else {
    $(".js-text_mobile").insertAfter(".js-button_mobile");
    $(".js-button-result__mobile").insertAfter(".js-text-result__mobile");
    $(".js-text-project_mobile").insertAfter(".js-button-project_mobile");
    $(".js-text-contacts__mobile").insertAfter(".js-button-contacts__mobile");
    $(".service-js-text__mobile").insertAfter(".service-js-button__mobile");
  }
});
