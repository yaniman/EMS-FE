import { GET_EMPLOYEES, GET_EMPLOYEES_REQUESTED } from '../types';
import * as type from '../types'
const initialState = {
    employees: [],
}
export default function employees(state = initialState, action) {
    switch (action.type) {
        
        case type.GET_EMPLOYEES_REQUESTED:
            console.log(state, action,'employees requested');

            return {
                ...state,
               // employees: action.employees

               // employees: action.payload
            }
            case type.GET_EMPLOYEES:
console.log(state, action,'employees get');

               return {
                    ...state,
                    employees: action.employees

                }
            default:
                return state;
    }
}