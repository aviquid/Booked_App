/*
 * UnderConstruction
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import axios from 'axios';
import PlayStore from 'assets/images/playStore.gif';

import { FlexCol, FlexWrap, SBAC, NotifyDiv, Input, NotifyBtn } from './styled';

const emailSubmitUrl = "http://ec2-18-217-146-71.us-east-2.compute.amazonaws.com/website_emailid.php";
const Form = SBAC.withComponent('form');
/* eslint-disable react/prefer-stateless-function */
export default class UnderConstruction extends React.PureComponent {
  handleEmailSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: emailSubmitUrl,
      data: {
        email: e.target.value
      }
    }).then(response => response.data)
    .catch(error => {
      throw error;
    });
  }
  render() {
    return (
    <FlexCol className="size1 ">
      <SBAC className="w-full p-l-80 p-r-80 p-t-22 p-lr-15-sm" style={{textAlign: "center"}}>
        <div className="wrappic1 m-r-30 m-t-10 m-b-10 logo">
          BookedUp!
        </div>
      </SBAC>

      <div className="flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-60">
        <h3 className="l1-txt1 txt-center p-b-40 respon1">
          Coming Soon
        </h3>
        <Form>
          <NotifyDiv>
            <Input placeholder="Enter e-mail address."/>
          </NotifyDiv>
          <NotifyBtn onClick={this.handleEmailSubmit} >
            Notify me!
          </NotifyBtn>
        </Form>
      </div>

      <div className="flex-w flex-c-m p-b-35">
        <a href="https://play.google.com/store/apps/details?id=com.bookedup.thejesh.test_bookyourbook" target="__blank">
          <img src={PlayStore} style={{"width": "150px"}}/>
        </a>
      </div>

    </FlexCol>
    );
  }
}
