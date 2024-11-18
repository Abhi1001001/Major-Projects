import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootreducer from "./Reducers/RootReducer";
import RootSaga from "./Sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer:rootreducer, middleware:()=>[sagaMiddleware]});
sagaMiddleware.run(RootSaga);
export default store;