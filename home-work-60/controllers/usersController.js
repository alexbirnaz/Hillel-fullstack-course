function getUsers(req, res) {
  res.send("Get users route");
}

function postUsers(req, res) {
  res.send("Post users route");
}

function getUserById(req, res) {
  res.send(`Get user by Id route: ${req.params.userId}`);
}

function updateUserById(req, res) {
  res.send(`Put user by Id route: ${req.params.userId}`);
}

function deleteUserById(req, res) {
  res.send(`Delete user by Id route: ${req.params.userId}`);
}

export { getUsers, postUsers, getUserById, updateUserById, deleteUserById };
