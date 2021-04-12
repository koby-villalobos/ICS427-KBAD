import React, {Component} from 'react';
import {Header, Icon, Image} from "semantic-ui-react";

export default class FirstComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="comptext">
      <Header as='h3' icon textAlign='center'>
        <Header.Content>Welcome To KBAD</Header.Content>
      </Header>
      <Image
          centered
          size='large'
          src='/public/lock-128.png'
      />
    </div>)
  }
}
