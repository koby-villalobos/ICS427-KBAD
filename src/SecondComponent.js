import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import {
  FirestoreProvider,
  FirestoreCollection
} from "@react-firebase/firestore";

let _ = require('lodash');

let config;

config = {
  apiKey: "AIzaSyAWOO1JIk36pSonbD_M4vPZngmVrM7N5L0",
  authDomain: "ics427-kbad-d5aca.firebaseapp.com",
  projectId: "ics427-kbad-d5aca",
  storageBucket: "ics427-kbad-d5aca.appspot.com",
  messagingSenderId: "754427388390",
  appId: "1:754427388390:web:67b5680e4d2d7c8e52b627"
};


// followed tutorial at https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

export default class InsertableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      message2: "",
      items: []
    }
  }


  objectReformat(inputObject) {
    let items = this.state.items;
    const arrayOfPass = [];
    let objectOfPass = {};
    const keys = Object.keys(inputObject);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      objectOfPass = {
        website: inputObject[key].website,
        password: inputObject[key].pass,
      };
      items.push(objectOfPass);
      arrayOfPass.push(objectOfPass);
    }
    this.setState({
      items: items,
      message: "",
      message2: ""
    });
    return arrayOfPass;
  }

  componentDidMount() {
    let database = firebase.database()
    let dataref = database.ref('/passwords/user/' + this.props.user.uid);

    dataref.once('value').then((snapshot) => {
      const userData = snapshot.val();
      console.log('user data: ' + JSON.stringify(userData));
      if(userData !== null ) {
        let arrayOfPass = this.objectReformat(userData);
      }

    });
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  updateMessage2(event) {
    this.setState({
      message2: event.target.value
    });
  }

  sendData (password, website) {
    //Used for Firebase pathing
    let webPath = website.replaceAll(".", "");
    webPath = webPath.replaceAll("#", "");
    webPath = webPath.replaceAll("$", "");
    webPath = webPath.replaceAll("[", "");
    webPath = webPath.replaceAll("]", "");
    webPath = webPath.replaceAll("/", "");
    webPath = webPath.replaceAll(":", "");
    webPath = webPath.replaceAll("\\", "");
    console.log(webPath);




    firebase.database().ref('/passwords/user/' + this.props.user.uid + '/' + webPath).set({
        pass: password,
        website: website,
      }).then(
          console.log("data sent to firebase")
      )

  }

  handleClick() {
    var items = this.state.items;
    let newMessage = {
      website: this.state.message2,
      password: this.state.message,
    }

    items.push(newMessage);


    this.sendData(this.state.message, this.state.message2);


    this.setState({
      items: items,
      message: "",
      message2: ""
    });
  }

  //for websites
  handleItemChanged(i, event) {
    var items = this.state.items;
    let websiteName = items[i].website;
    let currPass = items[i].password;
    items[i]  = event.target.value;

    let webPath = websiteName.replace(".", "");
    firebase.database().ref('/passwords/user/' + this.props.user.uid + '/' + webPath).set({
      pass: null,
      website: null,
    }).then(
        console.log("website updated")
    )

    webPath = items[0].replace(".", "");
    firebase.database().ref('/passwords/user/' + this.props.user.uid + '/' + webPath).set({
      pass: currPass,
      website: items[0],
    }).then(
        console.log("website updated")
    )

    this.setState({
      items: items
    });
  }

  //for passwords
  handleItemChanged2(i, event) {
    var items = this.state.items;
    let websiteName = items[i].website;
    items[i]  = event.target.value;

    firebase.database().ref('/passwords/user/' + this.props.user.uid + '/' + websiteName).set({
      pass: items[0],
      website: websiteName,
    }).then(
        console.log("password updated")
    )

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;
    let item = items[i];

    let webPath = item.website.replace(".", "");
    webPath = webPath.replaceAll("#", "");
    webPath = webPath.replaceAll("$", "");
    webPath = webPath.replaceAll("[", "");
    webPath = webPath.replaceAll("]", "");
    webPath = webPath.replaceAll("/", "");
    webPath = webPath.replaceAll("\\", "");
    webPath = webPath.replaceAll(":", "");


    firebase.database().ref('/passwords/user/' + this.props.user.uid + '/' + webPath).set({
      pass: null,
      website: null,
    }).then(
        console.log("data removed from firebase")
    )

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;


    // chrome.storage.local.get(['key'], function(result) {
    //   console.log('Value currently is ' + result.key);
    // });

    return  this.state.items.map(function(o, i) {
      return (
          <tr key={"item-" + i}>
            <td>
              <text
                  style={{ paddingRight: 10 }}
                  // type="text"
                  // value={o.website}
                  // onChange={context.handleItemChanged.bind(context, i)}
              >
                {o.website}
              </text>
            </td>
          <td>
            <text
                style={{ paddingRight: 10 }}
                // type="text"
                // value={o.password}
                // onChange={context.handleItemChanged2.bind(context, i)}
            >
              {o.password}
            </text>
          </td>
            <td>
              <button
                  onClick={context.handleItemDeleted.bind(context, i)}
              >
                Delete
              </button>
            </td>
          </tr>
      );
    });
  }

  render() {
    return (
        <div>
          <table className="">
            <thead>
            <tr>
              <th style={{ paddingRight: 10 }} >
                Websites
              </th>
              <th style={{ paddingRight: 10 }} >
                Passwords
              </th>
              <th style={{ paddingRight: 10 }} >
                Actions
              </th>
            </tr>
            </thead>
            <tbody>
            {this.renderRows()}
            </tbody>
          </table>
          <hr/>
          <input
              type="text"
              placeholder="Website URL"
              value={this.state.message2}
              onChange={this.updateMessage2.bind(this)}
          />
          <input
              type="text"
              placeholder="Password"
              value={this.state.message}
              onChange={this.updateMessage.bind(this)}
          />
          <button
              onClick={this.handleClick.bind(this)}
          >
            Add Password
          </button>


        </div>
    );
  }
}
