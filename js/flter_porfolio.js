$(document).ready(function(){
    $(".js-button").click(function(){
      var value = $(this).attr("data-filter");
      $(".js-button").removeClass("active").eq($(this).index()).addClass("active");
      var elem = $(".js-elem");
      if(value == "js-all"){
        $(elem).show();
      }
      else{
        $(elem).not("."+value).hide();
        $(elem).filter("."+value).show();
      }
    });
  })