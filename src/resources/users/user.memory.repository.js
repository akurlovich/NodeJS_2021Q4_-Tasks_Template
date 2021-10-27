import User from './user.model.js';
import taskService from '../task/task.service.js';

const users = [];

const getAll = async () => users;

const createUser = async (user) => {
  users.push(user);
  return user;
};

const getById = async (id) => users.find((user) => user.id === id);

const putById = async (newUser, id) => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx === -1) return false;
  users[idx] = new User({ id, ...newUser });
  return users[idx];
};

const deleteById = async (id) => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx === -1) return false;
  await taskService.deleteUser(id);
  users.splice(idx, 1);
  return true;
};

export default { getAll, createUser, getById, putById, deleteById };
