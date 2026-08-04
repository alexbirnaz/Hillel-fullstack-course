import { users } from "../data.js";

function getUsers(req, res) {
  res.render("users", { users });
}

function postUsers(req, res) {
  res.send("Post users route");
}

function getUserById(req, res) {
  const userId = Number(req.params.userId);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.render("user", { user });
}

function updateUserById(req, res) {
  res.send(`Put user by Id route: ${req.params.userId}`);
}

function deleteUserById(req, res) {
  res.send(`Delete user by Id route: ${req.params.userId}`);
}

export { getUsers, postUsers, getUserById, updateUserById, deleteUserById };
