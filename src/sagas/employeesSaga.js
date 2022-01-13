import {call,put, takeEvery} from 'redux-saga/effects';
const apiUrl = 'http://127.0.0.1:3000/employee'
function getApi()
{
    return fetch(apiUrl,
        {
method:'GET',
headers: {
    "Content-type": 'application/json'
}

        }
    ).then(response => response.json())
    .catch(error => {throw error})
}
function* fetchEmployees (action)
{
    try{
        const employees = yield call(getApi);
        yield put({type:'GET_EMPLOYEES', employees: employees})
    }
    catch (e){
        throw e
    }
}
 function* employeeSaga ()
 {
     yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees)
 }
 export default employeeSaga;