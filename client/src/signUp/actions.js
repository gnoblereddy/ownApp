import { SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

import callSignUpApi from './services';

function setSignUpPending(isLoading) {
  return {
    type: SIGNUP_PENDING,
    isLoading
  };
}

function setSignUpSuccessData(successData) {
  return {
    type: SIGNUP_SUCCESS,
    successData
  };
}

function setSignUpErrorData(errorData) {
  return {
    type: SIGNUP_ERROR,
    errorData
  }
}

export function signUpAction(registerData) {
  return dispatch => {
    dispatch(setSignUpPending(true));
    dispatch(setSignUpSuccessData(null));
    dispatch(setSignUpErrorData(null));
    callSignUpApi(registerData, response => {
      dispatch(setSignUpPending(false));
      // console.log("response.status",response.status)
      if (response.status) {
        // console.log("response.result.data ", response.result);
        dispatch(setSignUpSuccessData(response.result));
      } else {
        // dispatch(setSignUpErrorData(response.result.message));
      }
    });
  }
}