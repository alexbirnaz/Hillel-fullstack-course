import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function UserInfo({ user }) {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserInfo;
