import { all } from "redux-saga/effects";
import employeeSaga from "./employeesSaga";
export default function* rootSaga()
{
    yield all([
        employeeSaga()
    ])
}