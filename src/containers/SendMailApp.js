import React, { Component, PropTypes } from 'react';
import styles from './SendMailApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as SendMailActions from '../actions/SendMailActions';
import { SendMailComponent, mailTextComponent} from '../components';


 @connect(state => ({
   mailTextComponent : state
 }))
export default class SendMailApp extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render () {
	const {dispatch} = this.props;
    const actions = bindActionCreators(SendMailActions, dispatch);

    return (
      <div className={styles.sendMailApp}>
	  <h1>{this.props}</h1>
        <h1>Send Mail App</h1>
        <SendMailComponent sendMail={actions.sendMail} />
		<mailTextComponent> </mailTextComponent>
      </div>
    );
  }
}
