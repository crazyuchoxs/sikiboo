window.onLoad = Notification.requestPermission();
var settingan = {
    icon: 'https://1.bp.blogspot.com/-qy5PMFersHk/XN_xkCpYuzI/AAAAAAAAHDY/lbpYyvaz1yk_oITLwfbhksVH1DNhnt8mgCLcBGAs/s320/didesign-Logo%2BKarakter%2BPontianak%2BSugar%2BGlider.png',
    body: 'Minggu, Tanggal 14 Juli 2019, di Alun - Alun Kapuas (Korem), dari jam 16:00 ~ Selesai',
    vibrate: [100, 50, 100]
};

if (Notification.permission === 'granted') {
    new Notification('Jadwal Gathering PSG', settingan);
};