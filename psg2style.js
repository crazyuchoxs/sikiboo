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
        $('.alert-info').toggleClass('hide-alert');
    });
});

$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})



// $('#beranda').on('click', function () {
//     window.scroll('0', '0');
//     $('.nav-link').removeClass('active');
//     $('#beranda').addClass('active');
// });

// $('#aboutsg').on('click', function () {
//     window.scroll('0', '252');
//     $('.nav-link').removeClass('active');
//     $('#aboutsg').addClass('active');
// });

// $('#aboutpsg').click(function () {
//     $('.nav-link').removeClass('active');
//     $('#aboutpsg').addClass('active');
//     window.scroll('0', '1429');
// });

// $('#artikel').click(function () {
//     $('.nav-link').removeClass('active');
//     $('#artikel').addClass('active');
//     window.scroll('0', '1888');
// });


window.onload = function () {
    var uname = Cookies.get("username");
    if (uname === "" || uname === undefined) {
        Cookies.set("username", "psglover");
        $('.alert-info').removeClass('hide-alert');
    } else {
        Cookies.set("username", "");
    }
}