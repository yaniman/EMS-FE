import { createStore,compose, applyMiddleware } from "redux";
import rootReducer from './reducers/index.js';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index.js";
const sagaMiddleWare = createSagaMiddleware()
const store = compose(applyMiddleware(sagaMiddleWare)) (createStore)(rootReducer);
sagaMiddleWare.run(rootSaga);
export default store;