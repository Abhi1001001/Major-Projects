import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const auth = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <table className="text-left">
          <tr>
            <th className="border-b-2 border-gray-600 p-2">Name :</th>
            <td className="border-b-2 border-gray-600 p-2">{auth.name}</td>
          </tr>
          <tr>
            <th className="border-b-2 border-gray-600 p-2">Email :</th>
            <td className="border-b-2 border-gray-600 p-2">
              {auth.email}
            </td>
          </tr>
          <tr>
            <th className="border-b-2 border-gray-600 p-2">phoneNo :</th>
            <td className="border-b-2 border-gray-600 p-2">
              {auth.phoneNo}
            </td>
          </tr>
          <tr>
            <td >
          <Link
          to="/update-admin"
              className="bg-yellow-400 py-1 px-2 my-4 rounded-lg"
            >
              Upadte profile
            </Link>
            </td>
            <td >
          <button
              className="bg-yellow-400 py-1 px-2 my-4 rounded-lg float-right"
              onClick={logoutUser}
            >
              LogOut
            </button>
            </td>
          </tr>
        </table>
        
      </section>
    </>
  );
}
