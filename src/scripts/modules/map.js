const map = () => {
    ymaps.ready(init);
    function init(){
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [57.999716, 56.263588],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18
        });

        myMap.geoObjects.add(new ymaps.Placemark([57.999716, 56.263588], {
            balloonContent: 'Наше место расположения!'
        }, {
            preset: 'islands#icon',
            iconColor: 'red'
        }));
    }
};

export default map;