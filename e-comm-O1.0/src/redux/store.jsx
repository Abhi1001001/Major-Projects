import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootreducer from "./rootreducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer:rootreducer, middleware:()=>[sagaMiddleware]});
sagaMiddleware.run(saga);
export default store;