import { put, takeEvery } from "redux-saga/effects";
import { BESTSELLER_PRODUCTS, SET_BESTSELLER_PRODUCTS } from "./constent";

function* getBestsellerProducts(){
    let data = yield fetch("http://localhost:8000/bestseller");
    data = yield data.json();
    yield put({type: SET_BESTSELLER_PRODUCTS, data})
    
}
export default function* saga(){
    yield takeEvery(BESTSELLER_PRODUCTS, getBestsellerProducts)
}   