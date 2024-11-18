import { SET_SIGNUP_USER } from "../Constent";

export const signupUserData = (data = [], action) => {
  switch (action.type) {
    case SET_SIGNUP_USER:
      return action.data;
    default:
      return data;
  }
};
