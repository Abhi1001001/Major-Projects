import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserAction } from '../../redux/Actions/UserActions';

export default function UpdateAdmin() {
    const auth = JSON.parse(localStorage.getItem("user"));
    const [updatedUser, setUpdatedUser] = useState(auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUpdatedUserData = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUpdatedUser((old) => {
            return {
              ...old,
              [name]: value,
            };
          });
    }
    

    const updateUser = (e)=>{
        e.preventDefault();
       dispatch(updateUserAction(updatedUser));
       navigate("/admin")

    }
  return (
    
        <form className="max-w-96 m-auto flex flex-col gap-4" onSubmit={updateUser} action="">
        <label className="text-xl font-semibold py-4 m-auto" htmlFor="">Update Admin</label>
        <input className="border-2 border-gray-400 rounded-lg px-2 py-1" defaultValue={updatedUser.name} name="name" onChange={getUpdatedUserData} type="text" placeholder='Enter your updated name' />
        <input className="border-2 border-gray-400 rounded-lg px-2 py-1" defaultValue={updatedUser.email} name="email" onChange={getUpdatedUserData} type="email" placeholder='Enter your updated email id' />
        <input className="border-2 border-gray-400 rounded-lg px-2 py-1" defaultValue={updatedUser.phoneNo} name="phoneNo" onChange={getUpdatedUserData} type="text" placeholder='Enter your updated phone number' />
        <button className="w-full bg-yellow-400 border-2 border-gray-400 rounded-lg py-1" type='submit'>Update</button>
    </form>
    
  )
}
