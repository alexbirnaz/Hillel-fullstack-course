import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import UserCard from "./UserCard";

function UserList() {
  const { users } = useContext(AppContext);

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
