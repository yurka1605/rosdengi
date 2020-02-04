$( document ).ready(function() {
    $('.header__top_select').niceSelect();
    $( "#slider-summ" ).slider({
        range: false,
        min: 1,
        max: 100,
        value: 22,
        range: "min",
        step: 1,
        slide: function( event, ui ) {
            $( ".slider__top_summ" ).html( ui.value + ' 000 ₽');
        }
    });
});