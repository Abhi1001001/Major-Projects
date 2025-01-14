import { put, takeEvery } from "redux-saga/effects";
import {
  BESTSELLER_PRODUCTS,
  LOGIN_USER,
  SEARCH_PRODUCTS,
  SET_BESTSELLER_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  SIGNUP_USER,
  UPDATE_USER,
} from "../Constent";
import axios from "axios";

// getting bestseller data from database ----------->
function* getBestsellerProducts() {
  let auth = JSON.parse(localStorage.getItem("token"))
  console.log(auth);  
  let response = yield axios.get("https://e-comm-b-o1-0.onrender.com/bestseller", {headers: {"authorization" : `${auth}`}});
  yield put({ type: SET_BESTSELLER_PRODUCTS, data: response.data });
}

// sending signup user detail to database ----------->
function* postSignupUserData(user) {
  yield axios
    .post("https://e-comm-b-o1-0.onrender.com/signup", user.payload)
    .then((response) => {    
      console.log(response.data.newUser);       
      alert(`Welcome ${response.data.newUser.name}`);
      const tokenJSON = JSON.stringify(response.data.token);
      const userJSON = JSON.stringify(response.data.newUser);
      localStorage.setItem("token", tokenJSON);
      localStorage.setItem("user", userJSON);
    });
}

// validating login user detail from database ----------->
function* postLoginUserData(user) {
  yield axios
    .post("https://e-comm-b-o1-0.onrender.com/login", user.payload)
    .then((response) => {
      // console.log("data in saga", response.data);
      if (response.data.token) {       
        const userJSON = JSON.stringify(response.data.user);
        const tokenJSON = JSON.stringify(response.data.token);
        localStorage.setItem("user", userJSON);
        localStorage.setItem("token", tokenJSON);
      }
       else {
        alert("please enter correct email & password");
      }
    });
}

// update admin detail in database ----------->
function* updateUserData(updatedUser) { 
  yield axios
    .put(`https://e-comm-b-o1-0.onrender.com/updateuser/${updatedUser.payload._id}`, updatedUser.payload)
    .then(() => {   
      const userJSON = JSON.stringify(updatedUser.payload);
      localStorage.setItem("user", userJSON);
      alert("Detail updated successfully")
    }).catch((error)=>{    
      alert(error.message) 
    })
}

// search products from database ----------->

function* searchProductsData (searchProductsValue){
  let response = yield axios.get(`https://e-comm-b-o1-0.onrender.com/search/${searchProductsValue.payload}`);
  yield put({ type: SET_SEARCH_PRODUCTS, data: response.data});
  console.log(response.data);
}


export default function* Saga() {
  yield takeEvery(BESTSELLER_PRODUCTS, getBestsellerProducts);
  yield takeEvery(SIGNUP_USER, postSignupUserData);
  yield takeEvery(LOGIN_USER, postLoginUserData);
  yield takeEvery(UPDATE_USER, updateUserData);
  yield takeEvery(SEARCH_PRODUCTS, searchProductsData);
}
