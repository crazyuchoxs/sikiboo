$(window).scroll(function () {
    var wwscroll = $(this).scrollTop();
    console.log(wwscroll);
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
        window.open('https://www.pontianaksugarglider.org/p/blog-page_9.html', '_self');
    });
});

if (location.href == document.getElementById("beranda").href) {
    $('#beranda').addClass('active');
} else {
    $('#beranda').removeClass('active');
};