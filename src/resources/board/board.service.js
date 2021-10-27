import boardsRepo from './board.memory.repository.js';

const getAll = () => boardsRepo.getAll();

const createBoard = (board) => boardsRepo.createBoard(board);

const getById = (id) => boardsRepo.getById(id);

const putById = (newBoard, id) => boardsRepo.putById(newBoard, id);

const deleteById = (id) => boardsRepo.deleteById(id);

export default { getAll, createBoard, getById, putById, deleteById };
