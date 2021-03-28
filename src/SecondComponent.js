import React from 'react';
/* global chrome */

// followed tutorial at https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

export default class InsertableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: []
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    // chrome.storage.sync.set({key: this.state.message}, function() {
    //   console.log('Value is set to ' + this.state.message);
    // });
    //
    // chrome.storage.sync.get(['key'], function(result) {
    //   console.log('Value currently is ' + result.key);
    // });

    var value = this.state.message;

    //
    // chrome.storage.local.set({ key: value }, function(){
    //   //  Data's been saved boys and girls, go on home
    // });

    // chrome.storage.local.get(['key'], function(result) {
    //   console.log('Value currently is ' + result.key);
    // });

    this.setState({
      items: items,
      message: ""
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
              placeholder="ex: Pa55W0rD"
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