importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: 'BDCshRxsr9PdktNUHskeDY_pYxE335vPsp90ZIMep5HezjOwbP8h8CSqEMqzJ-BTKQardlgse3Tmkk7AB9oWCaI'
});

const messaging = firebase.messaging();