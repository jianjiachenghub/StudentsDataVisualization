$(".login_input_new > input").hover(function () {
        $(this).parent().css(
            'box-shadow', '2px 2px 80px rgba(0, 0, 0, .075), 0 0 15px rgba(102, 175, 233, .6)',
            '-webkit-box-shadow', '2px 2px 80px rgba(0, 0, 0, .075), 0 0 15px rgba(102, 175, 233, .6)',
            '-moz-box-shadow', '2px 2px 80px rgba(0, 0, 0, .075), 0 0 15px rgba(102, 175, 233, .6)',
        );
    },function () {
        $(this).parent().css(
            'box-shadow', '0px 0px 15px #dedede',
            '-webkit-box-shadow', '0px 0px 15px #dedede',
            '-moz-box-shadow', '0px 0px 15px #dedede',
        );
    }
);

$('.login_logo_png').click(function () {
    $(this).parent().onfocus;
})