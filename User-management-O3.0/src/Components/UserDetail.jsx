// import context API data ----------------->
import { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function UserDetail() {
  // const [user, setUser] = useState({});

  const { id } = useParams();
  // using context API data ----------------->
  const userContext = useUserContext();
  

  useEffect(() => {
    userContext.fetchSingleUser(id);
  }, []);

    // loading ------------->
  if (userContext.loading) {
    return <Loading />;
  }

  return (
    <>
      <main className="py-10">
        {userContext.viewedUser && (
          <table className="m-auto">
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">Name</th>
              <td className="py-4 px-10">{userContext.viewedUser.name}</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">Username</th>
              <td className="py-4 px-10">{userContext.viewedUser.username}</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">Email</th>
              <td className="py-4 px-10">{userContext.viewedUser.email}</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">Phone No</th>
              <td className="py-4 px-10">{userContext.viewedUser.phone}</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">Street</th>
              <td className="py-4 px-10">{userContext.viewedUser.address.street}</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">City</th>
              <td className="py-4 px-10">{userContext.viewedUser.address.city}</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">Company</th>
              <td className="py-4 px-10">{userContext.viewedUser.company.name}</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left py-4 px-10">Website</th>
              <td className="py-4 px-10">{userContext.viewedUser.website}</td>
            </tr>
          </table>
        )}
      </main>
    </>
  );
}
