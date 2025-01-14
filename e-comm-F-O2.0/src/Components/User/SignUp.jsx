import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signupUserAction } from "../../redux/Actions/UserActions";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSignupUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const postData = (e) => {
    e.preventDefault();
    if (!user.email && !user.password) {
      setError(true);
      return false;
    }
    dispatch(signupUserAction(user));
    navigate("/");
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (auth) navigate("/");
  });
  return (
    <>
      <form
        className="max-w-96 m-auto flex flex-col gap-4"
        onSubmit={postData}
        action=""
      >
        <label className="text-xl font-semibold py-4 m-auto">Register</label>
        <input
          className="border-2 border-gray-400 rounded-lg px-2 py-1"
          type="text"
          name="name"
          onChange={getSignupUserData}
          placeholder="Enter your name"
        />
        {error && !user.name && (
          <span className="text-red-600">Enter a valid name</span>
        )}
        <input
          className="border-2 border-gray-400 rounded-lg px-2 py-1"
          type="email"
          name="email"
          onChange={getSignupUserData}
          placeholder="Enter your email id"
        />
        {error && !user.email && (
          <span className="text-red-600">Enter a valid email</span>
        )}
        <input
          className="border-2 border-gray-400 rounded-lg px-2 py-1"
          type="text"
          name="phoneNo"
          onChange={getSignupUserData}
          placeholder="Enter your phone number"
        />
        {error && !user.phoneNo && (
          <span className="text-red-600">Enter a valid phone number</span>
        )}
        <input
          className="border-2 border-gray-400 rounded-lg px-2 py-1"
          type="password"
          name="password"
          onChange={getSignupUserData}
          placeholder="Enter a strong password"
        />
        {error && !user.password && (
          <span className="text-red-600">Enter a valid password</span>
        )}
        <button
          className="w-full bg-yellow-400 border-2 border-gray-400 rounded-lg py-1"
          type="submit"
        >
          Sign Up
        </button>
        <Link className="m-auto" to="/login">Log-in</Link>
      </form>
    </>
  );
}
