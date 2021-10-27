import tasksRepo from './task.memory.repository.js';

const getAll = () => tasksRepo.getAll();

const createTask = (task) => tasksRepo.createTask(task);

const getById = (id) => tasksRepo.getById(id);

const putById = (newTask, id) => tasksRepo.putById(newTask, id);

const deleteById = (id)=> tasksRepo.deleteById(id);

const deleteUser = (id)=> tasksRepo.deleteUser(id);

const deleteBoard = (id)=> tasksRepo.deleteBoard(id);

export default { getAll, createTask, getById, putById, deleteById, deleteUser, deleteBoard };
