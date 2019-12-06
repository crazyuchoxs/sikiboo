$('#bchusion').click(function () {
    $('.fmist').removeClass('aktifp');
    $('.lmate').removeClass('aktifp');
    $('.bchusion').addClass('aktifp');
});
$('#fmist').click(function () {
    $('.bchusion').removeClass('aktifp');
    $('.lmate').removeClass('aktifp');
    $('.fmist').addClass('aktifp');
});
$('#lmate').click(function () {
    $('.bchusion').removeClass('aktifp');
    $('.fmist').removeClass('aktifp');
    $('.lmate').addClass('aktifp');
});