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
    
    $('.form-body label').click(() => {
        $('.form-body input').is(":checked") ?
            $('.imitation-checkbox').addClass('active') : $('.imitation-checkbox').removeClass('active');
    });

    $('.main__tabs_item div').click(function() {
        if ($(window).width() >= '992') {
            $('.main__tabs_item').each((i,elem) => {
                if ($(elem).find('div').text() === $(this).text()) {
                    $('.main__tabs_item').eq(i).addClass('active');
                    $('.main__tabs-contener').eq(i).addClass('active');
                } else {
                    $('.main__tabs_item').eq(i).removeClass('active');
                    $('.main__tabs-contener').eq(i).removeClass('active');
                }
            });
        }
    });

    $('.slider-control').click(function() {
        let id = $('.main__tabs_item.active').attr('data-id') - 1;
        $('.main__tabs_item').eq(id).removeClass('active');
        $('.main__tabs-contener').eq(id).removeClass('active');
        if (id == 1) {
            $(this).addClass('hide');
        }
        if ($(this).hasClass('slider-right')) {
            $('.slider-left').removeClass('hide');
            id++;
        }
        if ($(this).hasClass('slider-left')) {
            $('.slider-right').removeClass('hide');
            id--;
        }
        $('.main__tabs_item').eq(id).addClass('active');
        $('.main__tabs-contener').eq(id).addClass('active');
        let left = '0px';
        switch (id) {
            case 1:
                left = '-300px';
                break;
            case 2:
                left = '-600px';
                break;
            default:
                left = '0px'; 
                break;
        }
        $('.main__tabs_item').eq(0).animate({marginLeft: left }, 300);
    });

    $('.fixed-mobile-btn').click(function () {
        var destination = $('.header__bottom_right').offset().top;
        $('body').animate({ scrollTop: destination }, 600);
        $('html').animate({ scrollTop: destination }, 600);
        return false; 
    });
});