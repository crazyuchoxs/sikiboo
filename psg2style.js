$(window).scroll(function () {
    var wwscroll = $(this).scrollTop();
    if (wwscroll > 100) {
        $('.judul').addClass('judultambahan');
    } else {
        $('.judul').removeClass('judultambahan');
    }

    if (wwscroll > 155) {
        $('.post-body').addClass('post-tambahan');
    } else {
        $('.post-body').removeClass('post-tambahan');
    }

    if (wwscroll > 1070) {
        $('.aboutpsg h1').addClass('judultambahan');

    } else {
        $('.aboutpsg h1').removeClass('judultambahan');
    }

    if (wwscroll > 1224) {
        $('.aboutpsg p').addClass('post-tambahan');
        $('.icon-anggota').addClass('icon-anggota-tambahan');
    } else {
        $('.aboutpsg p').removeClass('post-tambahan');
        $('.icon-anggota').removeClass('icon-anggota-tambahan');
    }

    if (wwscroll > 1614) {
        $('.artikel h1').addClass('artikel-tambahan');
    } else {
        $('.artikel h1').removeClass('artikel-tambahan');
    }

    if (wwscroll > 1845) {
        $('.artikel .popular-posts').addClass('artikel-tambahan');
    } else {
        $('.artikel .popular-posts').removeClass('artikel-tambahan');
    }
});

$(document).ready(function () {
    $('#menu-contact').click(function () {
        $('.item').toggleClass('item-tambahan');
        $('.menu-contact i').toggleClass('menu-contact-tambahan');
    });

    $('#instagram').click(function () {
        window.open('https://www.instagram.com/pontianaksugarglider');
    });

    $('#groupfacebook').click(function () {
        window.open('https://www.facebook.com/groups/SG.Pontianak');
    });

    $('.daftar-anggota div').click(function () {
        window.open('https://www.pontianaksugarglider.org/p/blog-page_9.html#aboutsg', '_self');
    });
    $('.card').after().click(function () {
        $('.alert-info').addClass('hide-alert');
    });
});

$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})

window.onload = function () {
    $('#ghari').html('Minggu');
    $('#gtanggal').html('14 Juli 2019');
    $('#gjam').html('16:00 ~ Selesai');
    $('#gtempat').html('Alun - Alun Kapuas (Korem)');
    var uname = Cookies.get("username");
    if (uname === "" || uname === undefined) {
        Cookies.set("username", "psglover");
        $('.alert-info').removeClass('hide-alert');
    };
    $('#jadwalgath').click(function () {
        $('.alert-info').removeClass('hide-alert');
    });
}
var namaprajurit = document.getElementsByClassName('nama-prajurit');
var frontbody = document.getElementsByClassName('front-body');
var backbody = document.getElementsByClassName('back-body');
for (let x = 0; x < namaprajurit.length; x++) {
    namaprajurit[x].addEventListener("click", function () {
        $('.front-body').removeClass('front-body-click');
        $('.back-body').removeClass('back-body-click');
        frontbody[x].classList.add('front-body-click');
        backbody[x].classList.add('back-body-click');
    })
}