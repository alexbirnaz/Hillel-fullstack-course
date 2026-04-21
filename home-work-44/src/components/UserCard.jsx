import UserInfo from "./UserInfo";

function UserCard({ user }) {
  return (
    <div className="card">
      <UserInfo user={user} />
    </div>
  );
}

export default UserCard;
