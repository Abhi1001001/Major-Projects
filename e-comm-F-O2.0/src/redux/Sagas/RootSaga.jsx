import { all } from "redux-saga/effects";
import Saga from "./Saga";

export default function* RootSaga() {
  yield all([Saga()])
}
