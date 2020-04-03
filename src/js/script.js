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