const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const createBoard = (board) => boardsRepo.createBoard(board);

const getById = (id) => boardsRepo.getById(id);

const putById = (newUser, id) => boardsRepo.putById(newUser, id);

const deleteById = (id) => boardsRepo.deleteById(id);

module.exports = { getAll, createBoard, getById, putById, deleteById };
