import { useEffect } from "react";
import { Link } from "react-router-dom";

// import context API data ------------------------>
import { useUserContext } from "../Context/UserContext";
import Loading from "./Loading";

export default function Home() {
  // using context API data ----------------->
  const userContext = useUserContext();

 // send id to context API for update or delete perticuler user -------------->
  const sendId = (id) => {
    userContext.setUserId(id);
  };
  
  // calling context API deleteUser function for delete user ------>
  const deleteUser = () => {
    // a confirm box popup for confirmation ---------->
    if (confirm("are you sure want to delete this user")) {
      userContext.deleteUser();
    }
  };

  // calling context API fetchUser function for fetch user ------>
  useEffect(() => {
    userContext.fetchUsers();
  }, []);

  // loading ------------->
  if (userContext.loading) {
    return <Loading />;
  }
  return (
    <>
      <main className="py-10">
        <table className="m-auto">
          <thead>
            <tr className="border-b-2">
              <th className="py-4 px-8">Name</th>
              <th className="py-4 px-8">Phone No</th>
              <th className="py-4 px-8">Email</th>
              <th className="py-4 px-8">Username</th>
              <th className="py-4 px-8">Action</th>
            </tr>
          </thead>
          <tbody>
            {userContext.user.map((user) => {
              return (
                <tr className="border-b-2" key={user.id}>
                  <td className="py-4 lg:px-8 md:px-4 px-2">{user.name}</td>
                  <td className="py-4 lg:px-8 md:px-4 px-2">{user.phone}</td>
                  <td className="py-4 lg:px-8 md:px-4 px-2">{user.email}</td>
                  <td className="py-4 lg:px-8 md:px-4 px-2">{user.username}</td>
                  <td className="py-4 lg:px-8 md:px-4 px-2 flex">
                    <Link
                      // calling sendId function on onclick --------->
                      className="cursor-pointer flex-shrink-0"
                      // sending id in url ---------->
                      to={`/update-user/${user.id}`}
                    >
                      <img src="./icons/icon-edit.svg" alt="loading..." />
                    </Link>

                    <img
                      // calling sendId, deleteUser function on onclick --------->
                      onClick={() => {
                        sendId(user.id);
                        deleteUser();
                      }}
                      className="cursor-pointer"
                      src="./icons/icon-delete.svg"
                      alt="loading..."
                    />

                    <Link
                      // calling sendId function on onclick --------->
                      className="cursor-pointer flex-shrink-0"
                      to={`/user-detail/${user.id}`}
                    >
                      <img src="./icons/icon-view.svg" alt="loading..." />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">
                <Link to="/addUser">
                  <button className="py-2 px-4 rounded-full outline-none border-none bg-blue-600 mt-5 float-right">
                    Add New User
                  </button>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
    </>
  );
}
