const { Router } = require('express');

const router = new Router();
const boardsService = require('./board.service');
const Board = require('./board.model');
const Column = require('../column/column.model');

router.get('/', async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.post('/', async (req, res) => {
  const boardRaw = req.body;
  boardRaw.columns = boardRaw.columns.map((col)=>new Column(col));
  const board = await boardsService.createBoard(new Board(boardRaw));
  res.status(201).json(board);
});

router.get('/:id', async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  if (board === 404 ) {
    res.status(404).send();
  }else{
    res.json(board);
  }
});

router.put('/:id', async (req, res) => {
  const boardRaw = req.body;
  boardRaw.columns = boardRaw.columns.map((col) => new Column(col));
  const board = await boardsService.putById(boardRaw, req.params.id);
  res.json(board);
});

router.delete('/:id', async (req, res) => {
  try {
    const status = await boardsService.deleteById(req.params.id);
    if (status) {
      res.status(204).json({message: 'The user has been deleted'});
    } else {
      res.status(404).json({message: 'User not found'});
    }
  } catch (error) {
    res.status(401).json({message: 'Access token is missing or invalid'});
  }
});

module.exports = router;
