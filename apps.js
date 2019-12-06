var firebaseConfig = {
    apiKey: "AIzaSyBm3MjBcYDsrOnlK_hSJmxjw8noTnZDYM0",
    authDomain: "notipikasi-kiboo.firebaseapp.com",
    databaseURL: "https://notipikasi-kiboo.firebaseio.com",
    projectId: "notipikasi-kiboo",
    storageBucket: "notipikasi-kiboo.appspot.com",
    messagingSenderId: "975297786783",
    appId: "1:975297786783:web:203d7cd35e5a19b7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref().child('object');
const nama = db.child('nama');
const telp = db.child('telp');

const msg = firebase.messaging();
msg.usePublicVapidKey("BHejZT3jAZsk0JQ7Bdbe8M225Yl7xcpdwTRbdBgzF9ZuVjv0H_th4v463ze30g1JhI2VJ_lyv5VWAV6ssST84D0");
msg.requestPermission()
    .then(function () {
        console.log('have permission');
        return msg.getToken();
    })
    .then(function (token) {
        console.log(token);
    })
    .catch(function (err) {
        console.log('error msg');
    })