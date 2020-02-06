$( document ).ready(function() {
    // инициализация html-элементов
    WINDOWSIZE = $(window).width();
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

// убираем смещение 1 таба при изменении ширины, если она была меньше 992px
$( window ).resize(function() {
    const currentWidth = $(window).width();
    if (currentWidth >= '992' && WINDOWSIZE < '992') {
        $('.main__tabs_item').eq(0).animate({marginLeft: '0px' }, 300);
    }
    WINDOWSIZE = currentWidth;
});

// при скролинге показываем кнопку прокрутки к форме, на мобилках
$(window).scroll(function () {
    if ($(window).width() <= '375') {
        var top = $('.main').offset().top;
        $(window).scrollTop() >= top ?
            $('.fixed-mobile-btn').addClass('show') : $('.fixed-mobile-btn').removeClass('show');
    }
});

// кастомный чекбокс
$('.form-body label').click(() => {
    $('.form-body input').is(":checked") ?
        $('.imitation-checkbox').addClass('active') : $('.imitation-checkbox').removeClass('active');
});

// переключения табов на десктопе
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

// слайдер табов на мобильных расширениях
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


// кнопка-scroll до формы на мобилке
$('.fixed-mobile-btn').click(function () {
    var destination = $('.header__bottom_right').offset().top;
    $('body').animate({ scrollTop: destination }, 600);
    $('html').animate({ scrollTop: destination }, 600); 
});