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
});