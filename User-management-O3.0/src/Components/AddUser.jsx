import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import context API data ----------------->
import { useUserContext } from "../Context/UserContext";

export default function AddUser() {
  const [addUserData, setAddUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
    },
    company: "",
    website: "",
  });
  const navigate = useNavigate();
  // using context API data ----------------->
  const userContext = useUserContext();

  // sending new user data ---------->
  userContext.setNewUser(addUserData);
  const sendData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "street" || name === "city") {
      setAddUserData((old) => {
        return {
          ...old,
          address: { ...old.address, [name]: value },
        };
      });
    } else {
      setAddUserData((old) => {
        return {
          ...old,
          [name]: value,
        };
      });
    }
  };

  // calling context API addUser function for add new user ------>
  const postData = async (event) => {
    event.preventDefault();
    await userContext.addUser();
    await navigate("/");
  };
  return (
    <>
      <main className="py-10">
        <form
          className="lg:w-3/5 md:w-2/3 w-4/5 m-auto gap-2 flex flex-col"
          action=""
          onSubmit={postData}
        >
          <lable>Name</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="name"
            placeholder="Enter name (minimum 3 char)"
            onChange={sendData}
          />
          <lable>Username</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="username"
            placeholder="Enter username (minimum 3 char)"
            onChange={sendData}
          />
          <lable>Email</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="email"
            name="email"
            placeholder="Enter your email (example@test.com)"
            onChange={sendData}
          />
          <lable>Phone No</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="phone"
            placeholder="Enter phone no (0000000000)"
            onChange={sendData}
          />
          <lable className="text-center text-lg">Address</lable>
          <lable>Street</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="street"
            placeholder="Enter your street (required)"
            onChange={sendData}
          />
          <lable>City</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="city"
            placeholder="Enter your city (required)"
            onChange={sendData}
          />
          <lable>Company</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="company"
            placeholder="Company name (optional if minimum 3 char)"
            onChange={sendData}
          />
          <lable>Website</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="website"
            placeholder="Enter your website (https://example.test)"
            onChange={sendData}
          />
          <button
            className="py-2 px-4 rounded-full outline-none border-none bg-blue-600 mt-5"
            type="submit"
          >
            Add
          </button>
        </form>
      </main>
    </>
  );
}
