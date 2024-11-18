import { LOGIN_USER, SIGNUP_USER, UPDATE_USER } from "../Constent";

export function signupUserAction(user) {
  // console.log("signup user action called with data", user);  
  return {
    type : SIGNUP_USER,
    payload : user
  }
}
export function loginUserAction(user) {
  // console.log("signup user action called with data", user);  
  return {
    type : LOGIN_USER,
    payload : user
  }
}
export function updateUserAction(user) {
  // console.log("signup user action called with data", user);  
  return {
    type : UPDATE_USER,
    payload : user
  }
}
