import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/Actions/UserActions";

export default function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLoginUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  useEffect(()=>{
    const auth = JSON.parse(localStorage.getItem("user"));
    if(auth) navigate("/")
})
  

  const loginUser = (e) => {
    e.preventDefault();
    if(!user.email && !user.password){
      setError(true);
      return false;
    } 
    dispatch(loginUserAction(user));
    navigate("/");
  };
  return (
    <>
      <form
        className="max-w-96 m-auto flex flex-col gap-4"
        action=""
        onSubmit={loginUser}
      >
        <label className="text-xl font-semibold py-4 m-auto">Login</label>
        <input
          className="border-2 border-gray-400 rounded-lg px-2 py-1"
          type="text"
          name="email"
          onChange={getLoginUserData}
          placeholder="Enter your email"
        />
        {error && !user.email && <span className="text-red-600">Enter a valid email</span>}
        <input
          className="border-2 border-gray-400 rounded-lg px-2 py-1"
          type="password"
          name="password"
          onChange={getLoginUserData}
          placeholder="Enter password"
        />
        {error && !user.password && <span className="text-red-600">Enter a valid password</span>}

        <button
          className="w-full bg-yellow-400 border-2 border-gray-400 rounded-lg py-1"
          type="submit"
        >
          Login
        </button>
        <Link className="m-auto" to="/signup">Signup</Link>
      </form>
    </>
  );
}
