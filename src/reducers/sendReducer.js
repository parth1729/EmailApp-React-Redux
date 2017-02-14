import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
		name: '',
		value: ''
};
export default function sendReducer(state = initialState, action) {
   switch (action.type) {

    case types.SEND_MAIL:
	
	     if(action.response == 200)
	     {
	     	  return Object.assign({},state,{message:'Mail Sent successfully.'});
	     }
	     else{
	     	  return Object.assign({},state,{message:'Error occurred.'});
	     }
    default:
      return state;
  }
}
