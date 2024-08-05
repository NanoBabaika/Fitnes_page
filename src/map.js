let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [47.141789, 39.745779],
        zoom: 16,
        controls:[]
    });



   let myPlacemark = new ymaps.Placemark([47.142164, 39.746535], {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        iconLayout: 'default#image',
        iconImageHref: "./img/svg/marks__icon.svg",
        iconImageSize:[46,57],
        iconImageOffset:[-35,-52],
 

        balloonContentHeader: "LEVEL FITNES",
        balloonContentBody: "Ул. Максима Горького, 84 г. Батайск,<br> Ростовская обл, Россия 346880",
        balloonContentFooter: "Всегда рады Вас видеть!",
   });

    myMap.geoObjects.add(myPlacemark); 
}

ymaps.ready(init);

 