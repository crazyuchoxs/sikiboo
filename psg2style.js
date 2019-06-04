$(window).scroll(function () {
    var wwscroll = $(this).scrollTop();
    console.log(wwscroll);
    if (wwscroll > 100) {
        $('.judul').addClass('judultambahan');
    } else {
        $('.judul').removeClass('judultambahan');
    }
    // if (wwscroll > 150) {

    // }
})