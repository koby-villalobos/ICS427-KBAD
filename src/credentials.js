import React, {Component} from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

let config;

config = {
  apiKey: "AIzaSyAWOO1JIk36pSonbD_M4vPZngmVrM7N5L0",
  authDomain: "ics427-kbad-d5aca.firebaseapp.com",
  projectId: "ics427-kbad-d5aca",
  storageBucket: "ics427-kbad-d5aca.appspot.com",
  messagingSenderId: "754427388390",
  appId: "1:754427388390:web:67b5680e4d2d7c8e52b627"
};
firebase.initializeApp(config);

export default class Credentials extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <FirebaseAuthProvider {...config} firebase={firebase} >
          <div>
            <button
                onClick={() => {
                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(googleAuthProvider);
                }}
            >
              Sign In with Google
            </button>
            <button
                onClick={() => {
                  firebase.auth().signOut();
                }}
            >
              Sign Out
            </button>
            <FirebaseAuthConsumer>
              {/*{({ isSignedIn, user, providerId }) => {*/}
              {/*  return (*/}
              {/*      <pre style={{ height: 300, overflow: "auto" }}>*/}
              {/*  {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}*/}
              {/*</pre>*/}
              {/*  );*/}
              {/*}}*/}
            </FirebaseAuthConsumer>
            <div>
              <IfFirebaseAuthed>
                {() => {
                  return (<div className="SecondComponent"><SecondComponent/></div>);
                }}
              </IfFirebaseAuthed>
              <IfFirebaseAuthedAnd
                  filter={({ providerId }) => providerId !== "anonymous"}
              >
                {({ providerId }) => {
                  return <div>You are authenticated with {providerId}</div>;
                }}
              </IfFirebaseAuthedAnd>
            </div>
          </div>
        </FirebaseAuthProvider>

    )}
}
