import usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();

const createUser = (user) => usersRepo.createUser(user);

const getById = (id) => usersRepo.getById(id);

const putById = (newUser, id) => usersRepo.putById(newUser, id);

const deleteById = (id)=> usersRepo.deleteById(id);

export default { getAll, createUser, getById, putById, deleteById };
