// import context API data ----------------->
import { useUserContext } from "../Context/UserContext";

export default function UserDetail() {
  // using context API data ----------------->
  const userContext = useUserContext();
  const user = userContext.user[userContext.userId - 1];

  return (
    <>
      <main className="py-10">
        <table className="m-auto">
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">Name</th>
            <td className="py-4 px-10">{user.name}</td>
          </tr>
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">Username</th>
            <td className="py-4 px-10">{user.username}</td>
          </tr>
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">Email</th>
            <td className="py-4 px-10">{user.email}</td>
          </tr>
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">Phone No</th>
            <td className="py-4 px-10">{user.phone}</td>
          </tr>
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">Street</th>
            <td className="py-4 px-10">{user.address.street}</td>
          </tr>
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">City</th>
            <td className="py-4 px-10">{user.address.city}</td>
          </tr>
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">Company</th>
            <td className="py-4 px-10">{user.company.name}</td>
          </tr>
          <tr className="border-b-2">
            <th className="text-left py-4 px-10">Website</th>
            <td className="py-4 px-10">{user.website}</td>
          </tr>
        </table>
      </main>
    </>
  );
}
