$(document).ready(function(){
    $(".js-button").click(function(){
      $(".js-button").removeClass("active").eq($(this).index()).addClass("active");
      var value = $(this).attr("data-filter");
      var elem = $(".js-elem");
      
      
        $(elem).not("."+value).hide();
        $(elem).filter("."+value).show();
      
    });
  })