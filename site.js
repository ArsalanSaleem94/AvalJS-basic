jQuery(document).ready(function ($) {
$(".mail").click(function () {
    $(this).hide(300, function () {
        $(".mail-login").show(300);
    });
});

// Disappear on clicking away functions
$('body').on('click', function (e) {
    if ($(e.target).closest('#mail-id').length == 0) {
        $(".mail-div .mail").show();
        $('#mail-id').hide(300);
    }
    if ($(e.target).closest('#last-td').length == 0) {
        $('.dot-block').hide();
        $(".nav-pop").hide();
    }

    if ($(e.target).closest('#contactos-dot-id').length == 0 && $(e.target).closest('#contact-dot').length == 0) {
        $('.contactos-dot-pop').hide();
    }

});

$('body').on('click', function (e) {
});

$('body').on('click', function (e) {
});

$(".login").click(function () {
    $(".login-pop").show();
    $(".login-black").show();
});

$(".date-p").click(function () {
    $(this).hide();
    $(this).siblings(".textbox-n").show();
    $(this).siblings(".textbox-n").open();
});

//Customer and merchant log in popup

$(".login-black").click(function () {
    $(".login-pop").hide();
    $(".login-black").hide();
});

//Actividad and merchant actividad functions

$(".open-pop").click(function () {
    $(".actividad-pop").show();
    $(".actividad-black1").show();
});

$(".actividad_m .dot-block a:first-child").click(function () {
    $(".actividad-pop").show();
    $(".actividad-black1").show();
});

$(".pop-back").click(function () {
    $(".actividad-pop").hide();
    $(".actividad-black1").hide();
    $("body").css("overflow", "scroll");
});

$(".search-btn").click(function () {
    $(".search-input").animate({ width: 'toggle' }, 350);
});

$(".a-dots").click(function (e) {
    $(".dot-block").not(document.getElementById("last-td")).hide();
    $(this).siblings(".dot-block").toggle();
    e.preventDefault();
});

var h = $(document).height();
$('.actividad-black1').height(h);
$('.actividad-black2').height(h);

$(".clicking #sum-td").click(function () {
    $(this).siblings().children(".td-div").toggle();
});

// Clientes

$('.actividad-pop-1 button').click(function () {
    if ($('.actividad-radio').is(':checked')) {
        $('.helper-text').hide()
    }
    else {
        $('.helper-text').show()
    }
});

$(".pop-add-focus").focusin(function () {
    $(".clientes-pop-add").show();
});

$(".pop-add-focus").focusout(function () {
    $(".clientes-pop-add").hide();
});


$(".status-pop-slider").click(function () {
    $(".status-pop .actividad_m-first").toggle(400);
});

$(".table th").click(function () {
    $(".clientes-sort").hide();
    $(this).children(".clientes-sort").show();
})

$('body').on('click', function (e) {
    if ($(e.target).closest('#clientes-second-th').length == 0) {
        $('.clientes-sort').hide();
    }
});

$("#clientes-masiva-button").click(function () {
    $(".clientes-masiva-dropdown").show();
})

$('body').on('click', function (e) {
    if ($(e.target).closest('#clientes-masiva-button').length == 0) {
        $('.clientes-masiva-dropdown').hide();
    }
});

$(".clientes-masiva-dropdown a:first-child").click(function () {
    $(".actividad-black1").show();
    $(".clientos-pop").show();
})

$(".clientes .dot-block a:nth-child(2)").click(function () {
    $(".actividad-black1").show();
    $(".clientos-pop").show();
})
$(".reversar").click(function () {
    $(".clientos-pop").hide();
    $(".clientos-pop2").show();
})
$("#percent-content .lines .left-line").click(function () {
    $('#percent-content .secondpercent').show();
    $('#percent-content .firstpercents .left h3, #percent-content .firstpercents .left p').css("color", "#02B28C");
    $('#percent-content .firstpercents .right h3, #percent-content .firstpercents .right p').css("color", "#bbb");
    $('#percent-content .lines .right-line').css('background-color', '#fff');
});
$("#percent-content .second-lines .right-line").click(function () {
    $('#percent-content .thirdpercent').show();
    $('#percent-content .secondpercents .left h3, #percent-content .secondpercents .left p').css("color", "#ddd");
    $('#percent-content .secondpercents .right h3, #percent-content .secondpercents .right p').css("color", "#02B28C");
    $('#percent-content .secondpercents, #percent-content .second-lines .left-line, #percent-content .lines .left-line').css('background-color', '#bdbdbd');
});

$("#percent-content2 .lines .left-line").click(function () {
    $('#percent-content2 .secondpercent').show();
    $('#percent-content2 .firstpercents .left h3, #percent-content2 .firstpercents .left p').css("color", "#02B28C");
    $('#percent-content2 .firstpercents .right h3, #percent-content2 .firstpercents .right p').css("color", "#bbb");
    $('#percent-content2 .lines .right-line').css('background-color', '#fff');
});

$('.panel-second').click(function () {
    $('#percent-content, .percent-h2-first').hide();
    $('#percent-content2, .percent-h2-second').show();
})

$('.panel-first').click(function () {
    $('#percent-content, .percent-h2-first').show();
    $('#percent-content2, .percent-h2-second').hide();
})

$('.panel-btn').click(function () {
    $('.second-small').show();
    $('header').hide();
    $('.small-header').show();
    $('.panel-small-btns').hide();
    var ctx = $("#myChart").get(0).getContext("2d");
    var myNewChart = new Chart(ctx);
    var myPieChart = new Chart(ctx).Pie([
            {
                value: 5145492,
                color: "#02B28C",
                highlight: "#02B28C",
                label: "Green"
            },
            {
                value: 3289741.65,
                color: "#00695b",
                highlight: "#00695b",
                label: "Dark Green"
            }
    ], {
        segmentShowStroke: false,
        responsive: true,
    });
})
$('.second-small .small-percent-row').click(function () {
    $('.second-small').hide();
    $('.third-small').show();
    var ctx2 = $("#myChart2").get(0).getContext("2d");
    var myNewChart2 = new Chart(ctx2);
    var myPieChart2 = new Chart(ctx2).Pie([
            {
                value: 2910850,
                color: "#02B28C",
                highlight: "#02B28C",
                label: "Green"
            },
            {
                value: 2234642,
                color: "#00695b",
                highlight: "#00695b",
                label: "Dark Green"
            }
    ], {
        segmentShowStroke: false,
        responsive: true,
    });
})

$(".clientes .buzon-table .clicking .dot-block a:first-child").click(function () {
    $(this).parent().parent().siblings().children(".td-div").toggle();
});

$(".clientes .clientes-content .clicking .dot-block a:first-child").click(function () {
    $(".clientes-user").show();
    $(".clientes-user .buzon-table").show();
    $(".clientes-content").hide();
});

// Pagos and pagos merchant functions

$(".pagos-bottom-button").click(function () {
    if (hasClass1(helperText.valid_email, 'valid') && hasClass1(helperText.valid_number, 'valid') && hasClass1(helperText.no_text, 'valid')) {
        $(".pagos-card-pop1").show();
        $(".actividad-black1").show();
    }
});

$(".pagos-pop-card").click(function () {
    $(".pagos-card-pop1").hide();
    $(".pagos-card-pop2").show();
});

$(".pagos-pop-second").click(function () {
    $(".pagos-card-pop2").hide();
    $(".pagos-card-pop3").show();
});

$(".pagos-pop-final").click(function () {
    $(".pagos-card-pop3").hide();
    $(".pagos-pop").show();
});

$(".pagos-pop-button2").click(function () {
    $(".pagos-pop").hide();
    $(".actividad-black1").hide();
});

$(".pagos-choice .inner-addon").click(function () {
    $(".pagos-choice .fa").addClass("fa-square-o").removeClass("checked fa-check-square");
    $(this).children(".fa").addClass("checked fa-check-square").removeClass("fa-square-o");
});

$(".left").click(function () {
    $(".left-pagos").show();
    $(".right-pagos").hide();
});

$(".right").click(function () {
    $(".right-pagos").show();
    $(".left-pagos").hide();
});

$(".pagos-button").click(function () {
    $(".pagos-button").addClass("pagos-second");
    $(this).removeClass("pagos-second");
});

$(".pagar-button").click(function () {
    $(".pagar").show();
    $(".cobrar").hide();
});

$(".cobrar-button").click(function () {
    $(".cobrar").show();
    $(".pagar").hide();
});

$(".cargar-button").click(function () {
    $(".cargar-div").show();
    $(".retirar-div").hide();
});

$(".cargar-button, .retirar-button").click(function () {
    $(".opacity-box").css("opacity", "0.5");
    $(".cuenta-hidding").hide();
});

$(".retirar-button").click(function () {
    $(".bottom-toggle").toggle();
    $(".retirar-div").show();
    $(".cargar-div").hide();
});


//contactos contactos-add-usr

$(".contactos-add-img").click(function () {
    $(".new-pop").toggle();
});

$(".contact-dot").click(function (e) {
    $(".contactos-dot-pop").hide();
    $(this).siblings(".contactos-dot-pop").toggle();
    e.preventDefault();
});

$(".contactos .navbar-nav li:first-child").click(function () {
    $(".contactos .cuenta-content-right .navbar-nav li").removeClass("active");
    $(this).addClass("active");
    $(".contactos-msg-div").show();
    $(".contactos-transaction").show();
});

$(".contactos .navbar-nav li:nth-child(2)").click(function () {
    $(".contactos .cuenta-content-right .navbar-nav li").removeClass("active");
    $(this).addClass("active");
    $(".contactos-msg-div").show();
    $(".contactos-transaction").hide();
});

$(".contactos .navbar-nav li:nth-child(3)").click(function () {
    $(".contactos .cuenta-content-right .navbar-nav li").removeClass("active");
    $(this).addClass("active");
    $(".contactos-msg-div").hide();
    $(".contactos-transaction").show();
});

$(".contactos .navbar-nav li:nth-child(4)").click(function () {
    $(".contactos .cuenta-content-right .navbar-nav li").removeClass("active");
    $(this).addClass("active");
    $(".contactos-msg-div").show();
    $(".contactos-transaction").show();
});

$(".contactos-add-usr").click(function () {
    $(".contactos-pop").show();
    $(".actividad-black1").show();
});

$(".profile .contactos-add-img span").click(function () {
    $(".contactos-pop.profile_m-pop").show();
    $(".actividad-black1").show();
});

$(".pop-back-second").click(function () {
    $(".contactos-pop").hide();
    $(".actividad-black1").hide();
    $(".clientos-pop").hide();
    $("body").css("overflow", "scroll");
});

$(".pop-back-second").click(function () {
    $(".actividad-pop-profile").hide();
    $(".actividad-black2").hide();
    $("body").css("overflow", "scroll");
});


//Merchant actividad

$("#top1").click(function () {
    $('#top1').removeClass('activividad_m-top-faded');
    $('#top3').addClass('activividad_m-top-faded');
    $("#top2").addClass('activividad_m-top-faded');
    $(".actividad_m-second").hide();
    $(".actividad_m-third").hide();
    $(".second-dropdown").show();
    $(".actividad_m-first").show();
});

$("#top2").click(function () {
    $('#top2').removeClass('activividad_m-top-faded');
    $('#top3').addClass('activividad_m-top-faded');
    $("#top1").addClass('activividad_m-top-faded');
    $(".actividad_m-first").hide();
    $(".actividad_m-third").hide();
    $(".second-dropdown").hide();
    $(".actividad_m-second").show();
});


$("#top3").click(function () {
    $('#top3').removeClass('activividad_m-top-faded');
    $("#top1").addClass('activividad_m-top-faded');
    $("#top2").addClass('activividad_m-top-faded');
    $(".actividad_m-first").hide();
    $(".actividad_m-second").hide();
    $(".second-dropdown").show();
    $(".actividad_m-third").show();
});

$(".actividad_m-second #sum-td,.actividad_m-third #sum-td").click(function () {
    $(".actividad-pop-profile").show();
    $(".actividad-black2").show();
});

$(".pop-back-second").click(function () {
    $(".actividad-pop-profile").hide();
    $(".actividad-black2").hide();
    $("body").css("overflow", "scroll");
});

$('.dropdown-menu a').click(function () {
    var linkText = $(this).text();
    $(this).parent().parent().siblings('button').html(linkText + '<span class="caret"></span>');
    $(this).parent().siblings("li").css('background-color', '#fff');
    $(this).parent().css('background-color', '#E0E0E0');
})

//Mi cuenta merchant

$(".cuenta-pop-button1").click(function () {
    $(".cuenta-pop1").show();
    $(".actividad-black1").show();
});

$(".pop-back-second").click(function () {
    $(".cuenta-pop1").hide();
    $(".actividad-black1").hide();
    $("body").css("overflow", "auto");

});

$(".cuenta-pop-button2").click(function () {
    $(".cuenta-pop2").show();
    $(".actividad-black2").show();
    $("body").css("overflow", "auto");
});

$(".pop-back-second").click(function () {
    $(".cuenta-pop2").hide();
    $(".actividad-black2").hide();
    $("body").css("overflow", "auto");
});



$(".pop-back-second").click(function () {
    $(".cuenta-pop3").hide();
    $(".actividad-black2").hide();
    $("body").css("overflow", "scroll");
});

$(".search-btn2").click(function () {
    $(".search-input2").animate({ width: 'toggle' }, 300);
});

$(".reportes-button").click(function () {
    $(".cuenta_m-reportes").show();
    $(".cuenta_m-right").hide();
});

$(".cuenta_m .cargar-button").click(function () {
    $(".cuenta_m-reportes").hide();
    $(".bottom-toggle").show();
    $(".cargar-div").show();
    $(".retirar-div").hide();
    $(".cuenta_m-right").show();
});

$(".cuenta_m .retirar-button").click(function () {
    $(".bottom-toggle").hide();
    $(".retirar-div").show();
    $(".cargar-div").hide();
    $(".cuenta_m-right").show();
    $(".cuenta_m-reportes").hide();
});

//cuenta responsive

$(".mob-nav-cuentas").click(function () {
    $(".mob-nav-cargar").removeClass("security-selected");
    $(".mob-nav-retirar").removeClass("security-selected");
    $(".mob-nav-cuentas").addClass("security-selected");
    $(".cuenta-mob form").hide();
    $(".cuenta-mob .cuenta-p").hide();
    $(".cuenta-mob .cuenta-mob-card3").show();
})

$(".mob-nav-cargar").click(function () {
    $(".mob-nav-cargar").addClass("security-selected");
    $(".mob-nav-retirar").removeClass("security-selected");
    $(".mob-nav-cuentas").removeClass("security-selected");
    $(".cuenta-mob form").show();
    $(".cuenta-mob .cuenta-p").show();
    $(".cuenta-mob .cuenta-mob-card3").show();
})

$(".mob-nav-retirar").click(function () {
    $(".mob-nav-cargar").removeClass("security-selected");
    $(".mob-nav-retirar").addClass("security-selected");
    $(".mob-nav-cuentas").removeClass("security-selected");
    $(".cuenta-mob form").hide();
    $(".cuenta-mob .cuenta-p").hide();
    $(".cuenta-mob .cuenta-mob-card3").hide();
})

$(".cuenta-mob-card1").click(function () {
    $(".cuenta-mob-card1").addClass("pagos-pop-selected");
    $(".cuenta-mob-card2").removeClass("pagos-pop-selected");
    $(".cuenta-mob-card3").removeClass("pagos-pop-selected");
    $(".cuenta-mob-card1 .cuenta-red-text").show();
    $(".cuenta-mob-card1 .cuenta-mob-confirm").show();
    $(".cuenta-mob-card2 .cuenta-red-text").hide();
    $(".cuenta-mob-card2 .cuenta-mob-confirm").hide();
    $(".cuenta-mob-card3 .cuenta-red-text").hide();
    $(".cuenta-mob-card3 .cuenta-mob-confirm").hide();
})

$(".cuenta-mob-card2").click(function () {
    $(".cuenta-mob-card2").addClass("pagos-pop-selected");
    $(".cuenta-mob-card1").removeClass("pagos-pop-selected");
    $(".cuenta-mob-card3").removeClass("pagos-pop-selected");
    $(".cuenta-mob-card2 .cuenta-red-text").show();
    $(".cuenta-mob-card2 .cuenta-mob-confirm").show();
    $(".cuenta-mob-card1 .cuenta-red-text").hide();
    $(".cuenta-mob-card1 .cuenta-mob-confirm").hide();
    $(".cuenta-mob-card3 .cuenta-red-text").hide();
    $(".cuenta-mob-card3 .cuenta-mob-confirm").hide();
})

$(".cuenta-mob-card3").click(function () {
    $(".cuenta-mob-card3").addClass("pagos-pop-selected");
    $(".cuenta-mob-card2").removeClass("pagos-pop-selected");
    $(".cuenta-mob-card1").removeClass("pagos-pop-selected");
    $(".cuenta-mob-card3 .cuenta-red-text").show();
    $(".cuenta-mob-card3 .cuenta-mob-confirm").show();
    $(".cuenta-mob-card2 .cuenta-red-text").hide();
    $(".cuenta-mob-card2 .cuenta-mob-confirm").hide();
    $(".cuenta-mob-card1 .cuenta-red-text").hide();
    $(".cuenta-mob-card1 .cuenta-mob-confirm").hide();
})

$(".cuenta-mob-confirm").click(function () {
    $(".cuenta-pop3").show();
    $(".actividad-black2").show();
    $("body").css("overflow", "hidden");
});

$(".pop-back-second").click(function () {
    $(".cuenta-pop3").hide();
    $(".actividad-black2").hide();
    $("body").css("overflow", "scroll");
});

$(".agregar-banco").click(function () {
    $(".cuenta-pop1").show();
    $(".actividad-black1").show();
    $("body").css("overflow", "hidden");
});

$(".pop-back-second").click(function () {
    $(".cuenta-pop1").hide();
    $(".actividad-black1").hide();
    $("body").css("overflow", "scroll");
});

$(".agregar-credito").click(function () {
    $(".cuenta-pop2").show();
    $(".actividad-black2").show();
    $("body").css("overflow", "hidden");
});

$(".pop-back-second").click(function () {
    $(".cuenta-pop2").hide();
    $(".actividad-black2").hide();
    $("body").css("overflow", "scroll");
});

$(".burger").click(function () {
    $(".actividad-black1").show();
    $(".small-menu").show();
    $("body, section#actividad").css("overflow", "hidden");
});
$(".burger").click(function () {
    $(".actividad-black1").hide();
    $(".actividad-black-admin").show();
    $(".small-menu").show();
    $("body, section#actividad").css("overflow", "hidden");
});
$(".navbar-header .glyphicon-option-vertical").click(function () {
    $(".navbar-header .nav-pop").toggle();
})

//Profile customer

$(".perfil-btn").click(function () {
    $(".cuenta-content-left-button").removeClass("selected-btn");
    $(this).addClass("selected-btn");
    $(".perfil-div").show();
    $(".notification-div").hide();
    $(".seguridad-div").hide();
});

$(".notification-btn").click(function () {
    $(".cuenta-content-left-button").removeClass("selected-btn");
    $(this).addClass("selected-btn");
    $(".perfil-div").hide();
    $(".notification-div").show();
    $(".seguridad-div").hide();
});

$(".seguridad-btn").click(function () {
    $(".cuenta-content-left-button").removeClass("selected-btn");
    $(this).addClass("selected-btn");
    $(".perfil-div").hide();
    $(".notification-div").hide();
    $(".seguridad-div").show();
});

// Profile merchant and admin

$(".permisos-btn").click(function () {
    $(".cuenta-content-left-button").removeClass("selected-btn");
    $(this).addClass("selected-btn");
    $(".perfil-div").hide();
    $(".notification-div").hide();
    $(".seguridad-div").hide();
    $(".permisos-div").show();
});

$(".perfil-btn").click(function () {
    $(".cuenta-content-left-button").removeClass("selected-btn");
    $(this).addClass("selected-btn");
    $(".perfil-div").show();
    $(".notification-div").hide();
    $(".seguridad-div").hide();
    $(".permisos-div").hide();
});

$(".notification-btn").click(function () {
    $(".cuenta-content-left-button").removeClass("selected-btn");
    $(this).addClass("selected-btn");
    $(".perfil-div").hide();
    $(".notification-div").show();
    $(".seguridad-div").hide();
    $(".permisos-div").hide();
});

$(".seguridad-btn").click(function () {
    $(".cuenta-content-left-button").removeClass("selected-btn");
    $(this).addClass("selected-btn");
    $(".perfil-div").hide();
    $(".notification-div").hide();
    $(".seguridad-div").show();
    $(".permisos-div").hide();
});

//profile responsive

if ($(window).width() <= 768) {
    $(".perfil-btn").removeClass("selected-btn")
    $(".cuenta-mob").show();
    $(".perfil-btn").click(function () {
        $(".cuenta-content-left-button").removeClass("selected-btn");
        $(this).addClass("selected-btn");
        $(".perfil-div").show();
        $(".notification-div").hide();
        $(".cuenta-content-left").hide();
        $(".cuenta-content-right").show();
    });
    $(".api-first").click(function () {
        $(".big-content").show();
        $(this).parent().parent().hide();
        $(".api-table").show();
        $(".api_m header").hide();
    });

    $(".api-second").click(function () {
        $(".big-content").show();
        $(this).parent().parent().hide();
        $(".api_m header").hide();
    });

    $(".notification-btn").click(function () {
        $(".cuenta-content-left-button").removeClass("selected-btn");
        $(this).addClass("selected-btn");
        $(".perfil-div").hide();
        $(".notification-div").show();
        $(".cuenta-content-left").hide();
        $(".seguridad-div").hide();
        $(".cuenta-content-right").show();
    });

    $(".seguridad-btn").click(function () {
        $(".cuenta-content-left-button").removeClass("selected-btn");
        $(this).addClass("selected-btn");
        $(".perfil-div").hide();
        $(".notification-div").hide();
        $(".cuenta-content-left").hide();
        $(".seguridad-div").hide();
        $(".profile-third-mobile").show();
        $(".profile-permisos-mobile").hide();
        $(".cuenta-content-right").show();
    });

    $(".mob-nav-security").click(function () {
        $(".mob-nav-sesiones").removeClass("security-selected");
        $(".mob-nav-dispositivos").removeClass("security-selected");
        $(".mob-nav-security").addClass("security-selected");
        $(".profile-password").show();
        $(".profile-mobile-sesiones").hide();
        $(".profile-mobile-dispositivos").hide();
    })

    $(".mob-nav-sesiones").click(function () {
        $(".mob-nav-sesiones").addClass("security-selected");
        $(".mob-nav-dispositivos").removeClass("security-selected");
        $(".mob-nav-security").removeClass("security-selected");
        $(".profile-password").hide();
        $(".profile-mobile-sesiones").show();
        $(".profile-mobile-dispositivos").hide();
    })

    $(".mob-nav-dispositivos").click(function () {
        $(".mob-nav-sesiones").removeClass("security-selected");
        $(".mob-nav-dispositivos").addClass("security-selected");
        $(".mob-nav-security").removeClass("security-selected");
        $(".profile-password").hide();
        $(".profile-mobile-sesiones").hide();
        $(".profile-mobile-dispositivos").show();
    })

}

//Buzon merchant

$(".table-button1").click(function () {
    $(".pagos-pop").show();
    $(".actividad-black1").show();
    $(".status-pop").hide();
});

$(".pop-back-second").click(function () {
    $(".pagos-pop").hide();
    $(".actividad-black1").hide();
    $("body").css("overflow", "scroll");
});

$(".buzon-button-first").click(function () {
    $(".buzon-second").removeClass("buzon-selected");
    $(".buzon-first").addClass("buzon-selected");
    $(".buzon-massage").show();
    $(".buzon-table").hide();
    $(".buzon-first-content").show();
});

$(".buzon-button-second").click(function () {
    $(".buzon-first").removeClass("buzon-selected");
    $(".buzon-second").addClass("buzon-selected");
    $(".buzon-massage").hide();
    $(".buzon-table").hide();
    $(".buzon_m .buzon-first-content").show();
});

$(".description-td .buzon-text-right").click(function () {
    $(this).siblings(".fa-commenting").toggle();
    $(this).siblings(".buzon-td-text").toggleClass("buzon-td-text-toggle");

});

$(".pop-back-table").click(function () {
    $(".buzon-table").hide();
    $(".buzon-first-content").show();
    $(".clientes-content").show();
    $(".actividad-black1").hide();
    $(".status-pop").hide();

});

$(".buzon-last-td").click(function () {
    if ($(".buzon-second").hasClass("buzon-selected")) {
        $(".actividad-pop-profile").show();
        $(".actividad-black2").show();
    }
});

$(".buzon-last-td").click(function () {
    if ($(".buzon-first").hasClass("buzon-selected")) {
        $(".buzon-table").show();
        $(".buzon-first-content").hide();
    }
});

$(".pop-back-second").click(function () {
    $(".actividad-pop-profile").hide();
    $(".actividad-black2").hide();
    $("body").css("overflow", "scroll");
});

$(".landing_m-button2").click(function () {
    $(".merch-landing-second").hide();
    $(".merch-landing-third").show();
});

//API pop

$(".glyphicon-option-vertical").click(function () {
    $(".api-pop1").show();
    $(".api_m .actividad-black1").show();
});

$(".status-span").click(function () {
    $(".status-pop").show();
    $(".status-pop .buzon-table").show();
    $(".actividad-black1").show();
});
$('.actividad-black-admin').click(function (e) {
    $('.small-menu').hide();
    $('.actividad-black-admin').hide();
    $("body, section#actividad").css("overflow", "visible");
});
$(".pop-back").click(function () {
    $(".api-pop1").hide();
    $(".actividad-black1").hide();
    $("body").css("overflow", "scroll");
});

$(".api-button-div1").click(function () {
    $(".api-pop-first").show();
    $(".actividad-black1").show();
});

$(".api-button-div2").click(function () {
    $(".api-pop-second").show();
    $(".actividad-black1").show();
});

$(".pop-back").click(function () {
    $(".api-pop2").hide();
    $(".api-pop3").hide();
    $(".actividad-black1").hide();
    $("body").css("overflow", "scroll");
});

$(".pop-back").click(function () {
    $(".pagos-card-pop1").hide();
    $(".pagos-card-pop2").hide();
    $(".pagos-card-pop3").hide();
});

$(".checkAll").click(function () {
    checkboxes = document.getElementsByName('check');
    for (var i in checkboxes)
        checkboxes[i].checked = this.checked;
});

$(".api-first").click(function () {
    $(".api-second").removeClass("buzon-selected");
    $(".api-first").addClass("buzon-selected");
    $(".buzon-first-content").show();
    $(".other-api-part").hide();
});

$(".api-second").click(function () {
    $(".api-first").removeClass("buzon-selected");
    $(".api-second").addClass("buzon-selected");
    $(".buzon-first-content").hide();
    $(".other-api-part").show();
});

$(".api-little-btn").click(function () {
    $(".api-little-btn2").removeClass("selected-api-btn");
    $(".api-little-btn").addClass("selected-api-btn");
    $(".api-table").show();
    $(".img-colones").hide();
});

$(".api-little-btn2").click(function () {
    $(".api-little-btn").removeClass("selected-api-btn");
    $(".api-little-btn2").addClass("selected-api-btn");
    $(".api-table").hide();
    $(".img-colones").show();
});
if ($(window).width() <= 768) {
    $(".historial-btn").click(function () {
        $(this).parent().parent().parent().parent().hide();
        $(".cuenta-content-right").show();
    });
}



//actividad_m mob
$(".small-actividad-button1").click(function () {
    $("header").hide();
    $(".actividad_m-small-choice").hide();
    $(".small-transacciones").show();
    $("body").css("overflow", "auto")
});

$(".small-content .pop-back-second").click(function () {
    $("header").show();
    $(".actividad_m-small-choice").show();
    $(".small-transacciones").hide();
    $(".pop-back-second p").first().show();
    $(".small-dropdowns").show();
    $(".pop-back-second p:nth-child(4)").hide();
    $(".pop-back-second img:nth-child(3)").hide();
    $(".actividad_m-small-client").hide();
    $(".small-content .bottom-btn").show();
    $(".small-ventas").hide();
    $$(".small-activos").hide();

});

$(".small-transacciones .small-table tr td:nth-child(2)").click(function () {
    $(".pop-back-second p").first().hide();
    $(".small-dropdowns").hide();
    $(".pop-back-second p:nth-child(4)").css('display', 'inline-block');
    $(".pop-back-second img:nth-child(3)").show();
    $(".actividad_m-small-client").show();
    $(".small-content .bottom-btn").hide();
});

$(".small-actividad-button2").click(function () {
    $("header").hide();
    $(".actividad_m-small-choice").hide();
    $(".small-activos").show();
    $("body").css("overflow", "auto");
});

$(".small-actividad-button3").click(function () {
    $("header").hide();
    $(".actividad_m-small-choice").hide();
    $(".small-ventas").show();
    $("body").css("overflow", "auto");
});



//profile_m mob
if ($(window).width() <= 767) {
    $(".permisos-btn").click(function () {
        $(".perfil-div").hide();
        $(".notification-div").hide();
        $(".cuenta-content-left").hide();
        $(".seguridad-div").hide();
        $(".profile-permisos-mobile").show();
        $(".profile-third-mobile").hide();
        $(".cuenta-content-right").show();
        $(".permisos-div").hide();
    });
    $(".buzon-second").click(function () {
        $(".perfil-div").hide();
    });
    //cuenta_m mob
    $(".reportes-dots-button").click(function () {
        $("header").hide();
        $(".cuenta-mob").hide();
        $(".reportes-small").show();
        $("body").css("overflow", "auto")
    });

    $(".pop-back-second").click(function () {
        $("header").show();
        $(".cuenta-mob").show();
        $(".reportes-small").hide();
        $("body").css("overflow", "scroll");
        $(".api_m .small-back").hide();
    });

    $(".reportes-small .a-dots").click(function () {
        $(".nav-pop").hide()
        $(this).parent().siblings(".nav-pop").toggle()
    })
    $(".cuenta-pop1 .pop-back-second img,.cuenta-pop2 .pop-back-second img").attr("src", "../assets/images/left-arrow-white.png");
}
$(".permisios-name").click(function () {
    $(".permisios-check").toggle();
});

//landing_m mob

$(".small-landing-btn2").click(function () {
    $(".small-col-2").hide();
    $(".small-col-3").show();
});
$(".small-landing-btn3").click(function () {
    $(".small-col-3").hide();
    $(".merch-landing-second").show();
});

$('.small-landing-btn').click(function () {
    patternTest(pattern.same(), helperText.same);
    if (hasClass1(helperText.charLength, 'valid') &&
              hasClass1(helperText.lowercase, 'valid') &&
                hasClass1(helperText.uppercase, 'valid') &&
              hasClass1(helperText.special, 'valid') &&
              hasClass1(helperText.same, 'valid') &&
              hasClass1(helperText.number_10_2, 'valid')) {
        $(".small-col-1").hide();
        $(".small-col-2").show();
    }
});

//buzon_m mob
$(".chat-row").click(function () {
    $(".small_chat").hide();
    $(".small_chat").removeClass("visible-xs");
    $(".buzon-buttons").hide();
    $("header").hide();
    $(".buzon-current-chat").show();
});
$(".pop-back-second").click(function () {
    $(".small_chat").show();
    $(".small_chat").addClass("visible-xs");
    $(".buzon-buttons").show();
    $(".buzon-current-chat").hide();
    $(".api_m .small-back").hide();
});
if ($(window).width() <= 767) {
    $(".buzon-second").click(function () {
        $(".small_chat").hide();
        $(".small_chat").removeClass("visible-xs");
        $(".buzon-buttons").hide();
        $("header").hide();
        $(".buzon-reclamos-mob").show();
    });
    $(".pop-back-second").click(function () {
        $(".small_chat").show();
        $(".small_chat").addClass("visible-xs");
        $(".buzon-buttons").show();
        $(".buzon-reclamos-mob").hide();
        $(".api_m .small-back").hide();
        $(".buzon-second").removeClass("buzon-selected");
        $(".buzon-first").addClass("buzon-selected");
    });

}


//Validation Checks !!!
$('.mail-login button,.crear_m_btn,.small-landing-btn').click(function () {
    if (hasClass1(helperText.charLength, 'valid') &&
              hasClass1(helperText.lowercase, 'valid') &&
                hasClass1(helperText.uppercase, 'valid') &&
              hasClass1(helperText.special, 'valid')
        ) {
        $('.helper-text').hide();
    }
    else {
        $('.helper-text').show()
    }
});

$('.mail-login button,.crear_m_btn,.small-landing-btn').click(function () {
    patternTest(pattern.same(), helperText.same);
    if (hasClass1(helperText.same, 'valid')) {
        addClass1(helperText.same, 'valid');
        $('.helper-text2').hide();
    }
    else {
        $('.helper-text2').show();
    }
});

$('.mail-login button,.crear_m_btn').click(function () {
    patternTest(pattern.number_10(), helperText.number_10);
    if (hasClass1(helperText.number_10, 'valid')) {
        addClass1(helperText.number_10, 'valid');
        $('.helper-text3').hide();
    }
    else {
        $('.helper-text3').show();
    }
});

$('.crear_m_btn,.small-landing-btn').click(function () {
    patternTest(pattern.number_10_2(), helperText.number_10_2);
    if (hasClass1(helperText.number_10_2, 'valid')) {
        addClass1(helperText.number_10_2, 'valid');
        $('.helper-text7').hide();
    }
    else {
        $('.helper-text7').show();
    }
});



$('.cuenta-pop2 form button').click(function () {
    patternTest(pattern.number_16(), helperText.number_16);
    if (hasClass1(helperText.number_16, 'valid')) {
        addClass1(helperText.number_16, 'valid');
        $('.helper-text4').hide();
    }
    else {
        $('.helper-text4').show();
    }
});

$('.cuenta-pop2 form button,.cuenta-pop1 form button').click(function () {
    patternTest(pattern.two_words(), helperText.two_words);
    if (hasClass1(helperText.two_words, 'valid')) {
        addClass1(helperText.two_words, 'valid');
        $('.helper-text5').hide();
    }
    else {
        $('.helper-text5').show();
    }
});

$('.actividad-pop-profile .buzon-bottom-but,.api-pop2 .pop2-button, .crear_m_btn ,.actividad-pop-form button,.cuenta-pop1 .cuenta-pop-button,.pagos-bottom-button').click(function () {
    patternTest(pattern.valid_number(), helperText.valid_number);
    if (hasClass1(helperText.valid_number, 'valid')) {
        addClass1(helperText.valid_number, 'valid');
        $('.helper-text6').hide();
    }
    else {
        $('.helper-text6').show();
    }
});

$('.pagos-bottom-button,.actividad-pop-1 button').click(function () {
    patternTest(pattern.no_text(), helperText.no_text);
    if (hasClass1(helperText.no_text, 'valid')) {
        addClass1(helperText.no_text, 'valid');
        $('.helper-text9').hide();
    }
    else {
        $('.helper-text9').show();
    }
});

$('.crear_m_btn,.pagos-bottom-button,.mail-login button').click(function () {
    patternTest(pattern.valid_email(), helperText.valid_email);
    if (hasClass1(helperText.valid_email, 'valid')) {
        addClass1(helperText.valid_email, 'valid');
        $('.helper-text8').hide();
    }
    else {
        $('.helper-text8').show();
    }
});

// VALIDATIONS !!!!

// Picking up input from user
var password = document.querySelector('.password');
var password2 = document.querySelector('.password2');
var number_10 = document.querySelector('.number-10');
var number_10_2 = document.querySelector('.number-10-2');
var number_16 = document.querySelector('.number-16');
var two_words = document.querySelector('.two-words');
var two_words1 = document.querySelector('.two-words1');
var valid_number = document.querySelector('.valid-number');
var valid_number1 = document.querySelector('.valid-number1');
var valid_number2 = document.querySelector('.valid-number2');
var valid_email = document.querySelector('.valid-email');
var valid_email1 = document.querySelector('.valid-email1');
var valid_email2 = document.querySelector('.valid-email2');
var no_text = document.querySelector('.no-text');
var no_text1 = document.querySelector('.no-text1');
var no_text2 = document.querySelector('.no-text2');

//connecting with html helper text parts
var helperText = {
    charLength: document.querySelector('.helper-text .length'),
    lowercase: document.querySelector('.helper-text .lowercase'),
    uppercase: document.querySelector('.helper-text .uppercase'),
    special: document.querySelector('.helper-text .special'),
    same: document.querySelector('.helper-text2 .same'),
    number_10: document.querySelector('.helper-text3 .number_10'),
    number_10_2: document.querySelector('.helper-text7 .number_10_2'),
    number_16: document.querySelector('.helper-text4 .number_16'),
    two_words: document.querySelector('.helper-text5 .two_words'),
    valid_number: document.querySelector('.helper-text6 .valid_number'),
    valid_email: document.querySelector('.helper-text8 .valid_email'),
    no_text: document.querySelector('.helper-text9 .no_text')
};

// Here's where it check validation and returns true if its okay
var pattern = {
    charLength: function () {
        if (password.value.length >= 8) {
            return true;
        }
    },
    lowercase: function () {
        var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

        if (regex.test(password.value)) {
            return true;
        }
    },
    uppercase: function () {
        var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

        if (regex.test(password.value)) {
            return true;
        }
    },
    special: function () {
        var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

        if (regex.test(password.value)) {
            return true;
        }
    },
    same: function () {
        if (password.value == password2.value) {
            return true;
        }
    },
    number_10: function () {
        if (((number_10.value).toString()).length <= 10 && ((number_10.value).toString()).length >= 5) {
            return true;
        }
    },
    number_10_2: function () {
        if (((number_10_2.value).toString()).length == 10) {
            return true;
        }
    },
    number_16: function () {
        if (((number_16.value).toString()).length == 16) {
            return true;
        }
    },
    two_words: function () {
        if (two_words1 == null) {
            two_words1 = 0
        }
        var split = (two_words.value).split(" ");
        if (split.length > 1) {
            return true;
        }
        var split1 = (two_words1.value).split(" ");
        if (split1.length > 1) {
            return true;
        }
    },

    valid_number: function () {
        if (valid_number1 != null) {
            if (valid_number1.value > 0) {
                return true;
            }
        }
        if (valid_number2 != null) {
            if (valid_number2.value > 0) {
                return true;
            }
        }

        if (valid_number.value > 0) {
            return true;
        }

    },
    valid_email: function () {
        if (valid_email1 != null) {
            if ((valid_email1.value).indexOf('@') > -1) {
                return true;
            }
        }
        if (valid_email2 != null) {
            if ((valid_email2.value).indexOf('@') > -1) {
                return true;
            }
        }
        if ((valid_email.value).indexOf('@') > -1) {
            return true;
        }
    },
    no_text: function () {
        if (no_text.value != "") {
            return true;
        }

        if (no_text1 != null) {
            if (no_text1.value != "") {
                return true;
            }
        }
        if (no_text2 != null) {
            if (no_text2.value != "") {
                return true;
            }
        }
    }
};


//Limit on 2 numbers after dot function
$('input[type=number]').keyup(function () {
    var array = ($(this).val()).split(".");
    if (array.length == 2) {
        if (array[1].length > 2) {
            $(this).val(
                function (index, value) {
                    return value.substr(0, value.length - 1);
                })
        }
    }
});

//If field message is not empty, unlock button
$('textarea.contactos-input, textarea.buzon-input').keyup(function () {
    if ($(this).val() != '') {
        $(this).parent().siblings('.contactos-submit').removeClass('btn-disabled');
    } else {
        $(this).parent().siblings('.contactos-submit').addClass('btn-disabled');
    }
});

// Listen for keyup action on password field
password.addEventListener('keyup', function () {
    // Check that password is a minimum of 8 characters
    patternTest(pattern.charLength(), helperText.charLength);

    // Check that password contains a lowercase letter      
    patternTest(pattern.lowercase(), helperText.lowercase);

    // Check that password contains an uppercase letter
    patternTest(pattern.uppercase(), helperText.uppercase);

    // Check that password contains a number or special character
    patternTest(pattern.special(), helperText.special);




    // Check that all requirements are fulfilled
    if (hasClass1(helperText.charLength, 'valid') &&
              hasClass1(helperText.lowercase, 'valid') &&
                hasClass1(helperText.uppercase, 'valid') &&
              hasClass1(helperText.special, 'valid')
        ) {
        addClass(password.parentElement, 'valid');
    }
    else {
        removeClass1(password.parentElement, 'valid');
    }
});

password2.addEventListener('keyup', function () {
    patternTest(pattern.same(), helperText.same);

    if (hasClass1(helperText.same, 'valid')) {
        addClass1(helperText.same, 'valid');
    }
});



function patternTest(pattern, response) {
    if (pattern) {
        addClass1(response, 'valid');
    }
    else {
        removeClass1(response, 'valid');
    }
}

function addClass1(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else {
        el.className += ' ' + className;
    }
}

function removeClass1(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function hasClass1(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    else {
        new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
}

//function validateRegistrationForm() {
//    patternTest(pattern.same(), helperText.same);
//    patternTest(pattern.valid_email(), helperText.valid_email);
//    patternTest(pattern.number_10(), helperText.number_10);
//    if (hasClass1(helperText.charLength, 'valid') &&
//            hasClass1(helperText.lowercase, 'valid') &&
//            hasClass1(helperText.uppercase, 'valid') &&
//            hasClass1(helperText.special, 'valid') &&
//            hasClass1(helperText.same, 'valid') &&
//            hasClass1(helperText.valid_email, 'valid') &&
//            hasClass1(helperText.number_10, 'valid')
//    ) {
//        return true;
//    } else {
//        return false;
//    }
//};

//Validation for merchant landing
$('.crear_m_btn').click(function () {
    patternTest(pattern.same(), helperText.same);
    if (hasClass1(helperText.charLength, 'valid') &&
              hasClass1(helperText.lowercase, 'valid') &&
                hasClass1(helperText.uppercase, 'valid') &&
              hasClass1(helperText.special, 'valid') &&
              hasClass1(helperText.same, 'valid')
        ) {
        $(".merch-landing-second").show();
        $(".merch-landing2").hide();
    }
});

});