// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         if(/^https:\/\/www\.google/.test(current_tab_info.url)){
//             chrome.tabs.insertCSS(null, {file: "./main.css"});
//             chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("foreground injected"));
//         }
//     });
// });

// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase
var config = {
    apiKey: 'AIzaSyAWOO1JIk36pSonbD_M4vPZngmVrM7N5L0',
    databaseURL: 'https://ics427-kbad-d5aca.firebaseio.com',
    storageBucket: 'ics427-kbad-d5aca.appspot.com'
};
firebase.initializeApp(config);

/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
    // Listen for auth state changes.
    firebase.auth().onAuthStateChanged(function(user) {
        console.log('User state change detected from the Background script of the Chrome Extension:', user);
    });
}

window.onload = function() {
    initApp();
};