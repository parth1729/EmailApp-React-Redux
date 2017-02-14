import * as types from '../constants/ActionTypes';

export function sendMail(response) {
  return {
    type: types.SEND_MAIL,
    response
  };
}

