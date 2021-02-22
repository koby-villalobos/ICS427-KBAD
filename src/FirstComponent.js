import React, {Component} from 'react';

export default class FirstComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const element = (<div>Find your passwords below</div>)
    return (<div className="comptext">
      <h3>Welcome to KBAD</h3>
      {this.props.displaytext}
      {element}
    </div>)
  }
}