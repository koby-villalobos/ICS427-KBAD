var firebaseConfig = {
    apiKey: "AIzaSyAWOO1JIk36pSonbD_M4vPZngmVrM7N5L0",
    authDomain: "ics427-kbad-d5aca.firebaseapp.com",
    projectId: "ics427-kbad-d5aca",
    storageBucket: "ics427-kbad-d5aca.appspot.com",
    messagingSenderId: "754427388390",
    appId: "1:754427388390:web:67b5680e4d2d7c8e52b627"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            chrome.runtime.sendMessage({ message: 'sign_in' }, function (response) {
                if (response.message === 'success') {
                    window.location.replace('./welcome.html');
                }
            });
            return false;
        },
        uiShown: function () {
            document.getElementById('my_sign_in').style.display = 'none';
            // document.getElementById('wrapper').style.pointerEvents = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

document.querySelector('#wrapper').addEventListener('click', () => {
    ui.start('firebaseui-auth-container', uiConfig);
});
