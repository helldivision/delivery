function validateForms(form) {
    $(form).validate( {
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите Ваше имя",
            phone: "Пожалуйста, введите свой телефон",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адресс почты"
            }
        }
    });
}
validateForms('#call-center');

jQuery(function($){
    $('input[name=phone]').mask("+7 (999) 999-99-99");
});

$(document).ready(function(){
    $('.inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/arrow_left.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/arrow_right.png"</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    dotsClass: 'dots-style',
                    arrows: false
                }
            }
        ]
    });
});