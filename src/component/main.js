 import React, { useEffect, useState } from 'react';
 import DataTable from "react-data-table-component";
 import { useSelector, useDispatch } from 'react-redux';
 import { getEmployees } from '../redux/actions/employees';
 import CreateModal from './createUserModal'
 const Employees = () => {
     let showCreateModal = false;
     const [name, setName]= useState('');

     const [gender, setGender]= useState('');

     const [dateOfBirth, setDB]= useState('');

     const [salary, setSalary]= useState('');
     const dispatch = useDispatch();
     const emp = useSelector(state => state.employees.employees);
     console.log('employees', emp)
     useEffect(()=>
     {
         console.log(showCreateModal)
dispatch(getEmployees())
console.log(emp, 'emp')
     },[]);
     const columns = [{
             name: 'Name',
             selector: 'name',
         },
         {
             name: 'Birth Date',
             selector: 'dateOfBirth',
         },
         {
             name: 'Gender',
             selector: 'gender',
         },
         {
            name: "",
            selector: "",
            width: "150px",
            cell: (row) => 
            <button onClick={deleteUser} id={row['_id']} className="btn  bg-red-500 text-white">x</button>,
            
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
         }
     ];

    function  deleteUser(row)
     {
        fetch('http://127.0.0.1:3000/employee/'+row.target.id,
            {
    method:'DELETE',
    headers: {
        "Content-type": 'application/json'
    }
    
            }
        ).then()
        .catch(error => {throw error})
console.log(row.target.id, 'clicked user');
     }
     function createNew()
     {
         const user = {
             name: name,
             gender: gender,
             salary: salary,
             dateOfBirth: dateOfBirth
         };
        fetch('http://127.0.0.1:3000/employee/',
        {
method:'POST',
headers: {
    "Content-type": 'application/json'
},
body: JSON.stringify(user)

        }
    ).then(dispatch(getEmployees()))
    .catch(error => {throw error}) 
showCreateModal = true;
console.log('create',salary, name, gender );
     }

     return ( 
     <>
     
<div className='mt-10 mb-10'>
<input type="text"  onChange={event => setName(event.target.value)} className='border-2 mr-3' placeholder='Name'></input>
        <input type="text" onChange={event => setGender(event.target.value)}  className='border-2 mr-3' placeholder='Gender'></input>
        <input type="text" onChange={event => setDB(event.target.value)}  className='border-2 mr-3' placeholder='Date of'></input>
        <input type="text" onChange={event => setSalary(event.target.value)} className='border-2 mr-3' placeholder='Salary'></input>
        <button type='submit' className='btn  text-green-500 mr-5' onClick={createNew}>Create New</button>
    </div>     
        <DataTable columns = { columns }
         data = {emp} >
         </DataTable> 
         </>
     );

 }
 export default Employees