import axios from "axios";
import { createContext, useContext, useMemo, useState } from "react";
import Loading from "../Components/Loading";

// creating context --------------->
export const UserContext = createContext(null);

// creating useUserContext function -------------->
export const useUserContext = () => {
  const userContextData = useContext(UserContext);
  return userContextData;
};

export default function UserContextProvider(props) {
  const [user, setUser] = useState([]);
  // getting updated user data -------------->
  const [updatedUser, setUpdatedUser] = useState();
  // getting new user data --------------->
  const [newUser, setNewUser] = useState({
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
  // getting user id for delete or update any perticuler user --------->
  const [userId, setUserId] = useState();
  // spinner loading -------------->
  const [loading, setloading] = useState(true);

  
  // validation ---------------------------------------->
  //name validation --------------->
  const validateName = (newUser) => newUser.name.match(/[a-z]{3,}/i);
  const isInvalidName = useMemo(() => {
    return validateName(newUser) ? false : true;
  }, [newUser.name]);
 
  //Username validation --------------->
  const validateUsername = (newUser) => newUser.username.match(/[a-z]{3,}/i);
  const isInvalidUsername = useMemo(() => {
    return validateUsername(newUser) ? false : true;
  }, [newUser.username]);

  //email validation --------------->
  const validateEmail = (newUser) =>
    newUser.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const isInvalidMail = useMemo(() => {
    return validateEmail(newUser) ? false : true;
  }, [newUser.email]);

  //phone no. validation --------------->
  const validatePhone = (newUser) => newUser.phone.match(/^[0-9]{10}$/);
  const isInvalidPhone = useMemo(() => {
    return validatePhone(newUser) ? false : true;
  }, [newUser.phone]); 
   

  //address(street) validation --------------->
  const validateStreet = (newUser) =>
    newUser.address.street.match(/[a-z]{1,}/i);
  const isInvalidStreet = useMemo(() => {
    return validateStreet(newUser) ? false : true;
  }, [newUser.address.street]);
  

  //address(city) validation --------------->
  const validateCity = (newUser) => newUser.address.city.match(/[a-z]{1,}/i);
  const isInvalidCity = useMemo(() => {
    return validateCity(newUser) ? false : true;
  }, [newUser.address.city]);
  

  //company validation --------------->
  const validateCompany = (newUser) => newUser.company.match(/[a-z]{3,}/i);
  const isInvalidCompany = useMemo(() => {
    if (newUser.company === "") return false;
    return validateCompany(newUser) ? false : true;
  }, [newUser.company]);
  

  //website validation --------------->
  const validateWebsite = (newUser) =>
    newUser.website.match(/^(http|https):\/\/[^ "]+$/);
  const isInvalidWebsite = useMemo(() => {
    if (newUser.website === "") return false;
    return validateWebsite(newUser) ? false : true;
  }, [newUser.website]);
  

  // fetch data from api ------------>
  const fetchUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        alert(`${error.message} occurred please try again`);
      });
      setloading(false);  
  };

  // update data in api -------------->
  const updateUser = async () => {
    await axios
      .put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser)
      .then((response) => {
        alert(`
              data updated successfully with
              Name : ${response.data.name}
              Username : ${response.data.username}
              Email : ${response.data.email}
              Phone : ${response.data.phone}
                      Address
              Street : ${response.data.address.street}
              City : ${response.data.address.city}
              Company : ${response.data.company.name}
              Website : ${response.data.website}
              `);
      })
      .catch((error) => {
        alert(`${error.message} occurred please try again`);
      });
  };

  // add data in api ------------->
  const addUser = async () => {
    if (
      !isInvalidName &&
      !isInvalidUsername &&
      !isInvalidMail &&
      !isInvalidPhone &&
      !isInvalidStreet &&
      !isInvalidCity &&
      !isInvalidCompany &&
      !isInvalidWebsite
    ){
      await axios
        .post(`https://jsonplaceholder.typicode.com/users/`, newUser)
        .then((response) => {
          alert(`
              data Added successfully with
              Name : ${response.data.name}
              Username : ${response.data.username}
              Email : ${response.data.email}
              Phone : ${response.data.phone}
                      Address
              Street : ${response.data.address.street}
              City : ${response.data.address.city}
              Company : ${response.data.company.name}
              Website : ${response.data.website}
              `);
        })
        .catch((error) => {
          alert(`${error.message} occurred please try again`);
        });
      }else{
        alert("please enter all valid details")
      }
  };

  // delete data from api ------------>
  const deleteUser = async () => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        alert(`
              data deleted successfully`);
      })
      .catch((error) => {
        alert(`${error.message} occurred please try again`);
      });
  };


  return (
    <UserContext.Provider
      value={{
        fetchUsers,
        updateUser,
        addUser,
        deleteUser,
        setUpdatedUser,
        setNewUser,
        setUserId,
        user,
        userId,
        loading
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
