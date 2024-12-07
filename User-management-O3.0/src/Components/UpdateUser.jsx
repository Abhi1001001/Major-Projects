import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import context API data ----------------->
import { useUserContext } from "../Context/UserContext";

export default function UpdateUser() {
  // getting user id from url ----------->
  const {id} = useParams();
  // using context API data ----------------->
  const userContext = useUserContext(); 

  const navigate = useNavigate();
  const [updatedUserData, setUpdatedUserData] = useState(userContext.user[id-1]);
 
// sending updated user data ---------->
  userContext.setUpdatedUser(updatedUserData); 
  const sendData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "street" || name === "city") {
      setUpdatedUserData((old) => {
        return {
          ...old,
          address: { ...old.address, [name]: value },
        };
      });
    } else {
      setUpdatedUserData((old) => {
        return {
          ...old,
          [name]: value,
        };
      });
    }
  };

   // calling context API updateUser function for update user ------>
  const postData = async (event)=>{
    event.preventDefault();
    await userContext.updateUser();
    await navigate('/')  
  }
  
  return (
    <>
      <main className="py-10">
        <form className="lg:w-3/5 md:w-2/3 w-4/5 m-auto gap-2 flex flex-col" action="" onSubmit={postData}>
          <lable>Name</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="name"
            onChange={sendData}
            value={updatedUserData.name}
            placeholder="Enter updated name"
          />
          <lable>Username</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="username"
            onChange={sendData}
            value={updatedUserData.username}
            placeholder="Enter updated username"
          />
          <lable>Email</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="email"
            name="email"
            onChange={sendData}
            value={updatedUserData.email}
            placeholder="Enter your updated email"
          />
          <lable>Phone No</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="phoneNo"
            onChange={sendData}
            value={updatedUserData.phone}
            placeholder="Enter updated phone no"
          />
          <lable className="text-center text-lg">Address</lable>
          <lable>Street</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="street"
            onChange={sendData}
            value={updatedUserData.address.street}
            placeholder="Enter your updated street"
          />
          <lable>City</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="city"
            onChange={sendData}
            value={updatedUserData.address.city}
            placeholder="Enter your updated city"
          />
          <lable>Company</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="company"
            onChange={sendData}
            value={updatedUserData.company.name}
            placeholder="Enter your company name"
          />
          <lable>Website</lable>
          <input
            className="py-2 px-4 rounded-full outline-none border-none text-black"
            type="text"
            name="website"
            onChange={sendData}
            value={updatedUserData.website}
            placeholder="Enter your updated website"
          />
          <button
            className="py-2 px-4 rounded-full outline-none border-none bg-blue-600 mt-5"
            type="submit"
          >
            Update
          </button>
        </form>
      </main>
    </>
  );
}
