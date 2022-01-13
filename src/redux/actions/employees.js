import * as type from '../types';
export function getEmployees(employees) {
    return {
        type: type.GET_EMPLOYEES_REQUESTED,
        payload: employees
    }
}