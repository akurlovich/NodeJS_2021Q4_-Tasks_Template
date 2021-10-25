const USERS = [];

const getAll = async () => USERS;
const getById = async (id) => USERS.find(user => user.id === id);
const addUser = async (user) => USERS.push(user);
const updateUser = async (id, user) => {
  const userIndex = USERS.findIndex(item => item.id === id);
  if (userIndex >= 0) {
    const userTemp = user;
    userTemp.id = id;
    USERS[userIndex] = userTemp;
    return true;
  }
  return false;
};
const deleteUser = async (id) => USERS.filter((user, index) => {
  if (user.id === id) {
    USERS.splice(index, 1);
    return true;
  }
  return false;
});

module.exports = { getAll, getById, addUser, updateUser, deleteUser };