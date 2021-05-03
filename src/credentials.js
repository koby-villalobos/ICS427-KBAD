import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import 'firebase/database';


import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd, IfFirebaseUnAuthed
} from "@react-firebase/auth";
import SecondComponent from './SecondComponent';

let config;

config = {
  apiKey: "AIzaSyAWOO1JIk36pSonbD_M4vPZngmVrM7N5L0",
  authDomain: "ics427-kbad-d5aca.firebaseapp.com",
  projectId: "ics427-kbad-d5aca",
  databaseURL: "https://ics427-kbad-d5aca-default-rtdb.firebaseio.com/",
  storageBucket: "ics427-kbad-d5aca.appspot.com",
  messagingSenderId: "754427388390",
  appId: "1:754427388390:web:67b5680e4d2d7c8e52b627"
};
firebase.initializeApp(config);


const sendData = (user) => {
  return (
              <div>
                <button
                    onClick={async () => {
                    firebase.database().ref('/passwords/user/' + user.uid).set({
                      pass: "notmypassword",
                    }).then(
                        console.log("datat sent to firebase")
                    )
                    }}
                >
                  Push
                </button>
              </div>
  );
}

const UnAuthedPage = () => {
  return (

      <FirebaseAuthProvider {...config} firebase={firebase} >
        <div>
          <IfFirebaseUnAuthed>
            <button
                onClick={() => {
                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(googleAuthProvider);
                }}
            >
              Sign In with Google
            </button>
          </IfFirebaseUnAuthed>



          {/*<FirebaseAuthConsumer>*/}
          {/*  {({ isSignedIn, user, providerId }) => {*/}
          {/*    return (*/}
          {/*        <pre style={{ height: 300, overflow: "auto" }}>*/}
          {/*    {JSON.stringify({ user }, null, 2)}*/}
          {/*  </pre>*/}
          {/*    );*/}
          {/*  }}*/}
          {/*</FirebaseAuthConsumer>*/}
          <div>
            <IfFirebaseAuthed>
              <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                  if(user !== null) {
                    return (
                        // <div className="SecondComponent" firebase={firebase} user={user}><SecondComponent/></div>
                        <SecondComponent firebase={firebase} user={user}> </SecondComponent>

                    );
                  }
                }}

              </FirebaseAuthConsumer>
            </IfFirebaseAuthed>
            {/*<IfFirebaseAuthedAnd*/}
            {/*    filter={({ providerId }) => providerId !== "anonymous"}*/}
            {/*>*/}
            {/*  {({ providerId }) => {*/}
            {/*    return <div>You are authenticated with {providerId}</div>;*/}
            {/*  }}*/}
            {/*</IfFirebaseAuthedAnd>*/}

            <IfFirebaseAuthed>
              <button
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
              >
                Sign Out
              </button>
            </IfFirebaseAuthed>
          </div>
        </div>
      </FirebaseAuthProvider>

  );
};

export default class Credentials extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>

          {UnAuthedPage()}


        </div>

    )}
}
