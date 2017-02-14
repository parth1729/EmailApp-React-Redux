import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './SendMailComponent.css';

import { mailTextComponent } from './mailTextComponent';

export default class SendMailComponent extends Component {
  static propTypes = {
    sendMail: PropTypes.func.isRequired
  }
  render () {
    return (
	<div>
	<label>From : </label>
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.emailInput)}
        placeholder="Enter sender email address"
        value={this.state.senderEmail}
        onChange={this.handleChange.bind(this, 'senderEmail')} />
	
	<label>To : </label>
      <input
        type="text"
        className={classnames('form-control', styles.emailInput)}
        placeholder="Enter receiver email address"
        value={this.state.name}
        onChange={this.handleChange.bind(this, 'name')} />
		
	<label>Subject : </label>
      <input
        type="text"
        className={classnames('form-control', styles.emailInput)}
        placeholder="Enter subject"
        value={this.state.subjectMail}
        onChange={this.handleChange.bind(this, 'subjectMail')} />
	
		<button className="btn-primary" onClick={this.handleSubmit.bind(this)}>Send</button>
		
	</div>
    );
  }
  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
	  senderEmail: this.props.senderEmail || '',
	  subjectMail: this.props.subjectMail || ''
    };
  }
  handleChange (name, e) {
	  var change = {};
      change[name] = e.target.value;
      this.setState(change);
    //this.setState({ name: e.target.value});
  }
  
  handleSubmit (e) {
    const name = e.target.value.trim();
	    fetch('http://localhost:1337/emailInfo', {
      method: 'post',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        },
      body:JSON.stringify({email:this.state.name, senderEmail:this.state.senderEmail, subjectMail:this.state.subjectMail}),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
		this.props.sendMail(response.status);
      } else {
		this.props.sendMail(response.status);
      }
    })
    .catch(error => { console.log('request failed', error); });
      this.setState({ name: '', senderEmail:'', subjectMail:''});
    }
}
