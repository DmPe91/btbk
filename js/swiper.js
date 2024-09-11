var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
    speed: 900,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".slider-pagination--custom",
      clickable: true,
    },
});

  $counter = document.querySelector(".counter")
  var swiper_pesonal = new Swiper(".swiper-personal", {
    autoHeight: true,
    spaceBetween: 30,
    speed: 900,
    navigation: {
      nextEl: ".myslider-next",
      prevEl: ".myslider-prev",
    },
    pagination: {
      el: ".vertical-pagination",
      clickable: true,
  },
 
  on : {
      init: function(){
    $counter.innerHTML = this.realIndex  + 1
  },
  slideChange: function(){
    $counter.innerHTML = this.realIndex + 1
  }
  }, 
  breakpoints : {
     480: {
      autoHeight: false, //enable auto height
     }
  }
  });
 
$(function(){
 animation_slider($(".js-pagination--1"), $('<span class="swiper_indicator"></span>'));
 animation_slider($(".js-pagination--2"), $('<span class="swiper_indicator"></span>'));
 animation_slider($(".js-pagination--3"), $('<span class="swiper_indicator"></span>'));
 animation_slider($(".js-pagination--4"), $('<span class="swiper_indicator"></span>'));
 


  function animation_slider(animation_class, animation_indicator){
  var menu = $(animation_class);
  var indicator = animation_indicator;
   menu.append(indicator);
   var element = menu.find('.swiper-pagination-bullet');
   var classToWatch = 'swiper-pagination-bullet-active';
   var observer = new MutationObserver(function(mutations) {
     mutations.forEach(function(mutation) {
       if (mutation.attributeName === 'class' && element.hasClass(classToWatch)) {
         position_timer = element.filter(".swiper-pagination-bullet-active")
         position_indicator(position_timer);
         }
       });
   });
   observer.observe(element[0], { attributes: true });
   var position__indicator = indicator.position();
   position_indicator(menu.find(".swiper-pagination-bullet-active"));
   setTimeout(function(){indicator.css("opacity", 1);}, 500);
   menu.find(".swiper-pagination-bullet").click(function(){
     position_indicator($(this));
   });
    function position_indicator(ele){
           var position = ele.position();
           indicator.animate({left: position.left - position__indicator.left
           }, 500, function(){})
    }
  }
})


         $(function(){
          var menu = $(".vertical-pagination");
          var indicator = $('<span class="swiper-vertical-indicator"></span>');
          menu.append(indicator);
          var element = menu.find('.swiper-pagination-bullet');
          var classToWatch = 'swiper-pagination-bullet-active';
          var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              if (mutation.attributeName === 'class' && element.hasClass(classToWatch)) {
                position_timer = element.filter(".swiper-pagination-bullet-active")
                position_indicator(position_timer);
              }
             
            });
          });
          observer.observe(element[0], { attributes: true });
          setTimeout(function(){indicator.css("opacity", 1);}, 500);
          var position__indicator = indicator.position();
          position_indicator(menu.find(".swiper-pagination-bullet-active"));
           function position_indicator(ele){
                 var position = ele.position();
                 indicator.animate({top: position.top - position__indicator.top}, 500, function(){})
                 
           }});  
       