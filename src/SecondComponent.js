import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import {
  FirestoreProvider,
  FirestoreCollection
} from "@react-firebase/firestore";


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
      firebase.database().ref('/passwords/user/' + this.props.user.uid + '/' + website).set({
        pass: password,
      }).then(
          console.log("datat sent to firebase")
      )

  }

  handleClick() {
    var items = this.state.items;
    let newMessage = this.state.message + this.state.message2;

    items.push(newMessage);


    this.sendData(this.state.message, this.state.message2);


    this.setState({
      items: items,
      message: "",
      message2: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

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
              <input
                  type="text"
                  value={o}
                  onChange={context.handleItemChanged.bind(context, i)}
              />
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
              <th>
                Your Password(s)
              </th>
              <th>
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
