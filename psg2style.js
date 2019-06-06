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
    } else {
        $('.aboutpsg p').removeClass('post-tambahan');
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
    })
})
    $('.instagram').click(function () {
        $(window).open('https://www.instagram.com/pontianaksugarglider');
    });

    $('.groupfacebook').click(function () {
        $(window).open('https://www.facebook.com/groups/SG.Pontianak');
    });