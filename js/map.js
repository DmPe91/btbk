ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [45.052774, 38.948157],
    zoom: 18,
    controls: [],
  });
  var placemark_brick = new ymaps.Placemark(
    [45.052774, 38.948157],
    {},
    {
      iconLayout: "default#image",

      iconImageHref: "img/geo.svg",

      iconImageSize: [49, 68],
    }
  );
  myMap.geoObjects.add(placemark_brick)
}