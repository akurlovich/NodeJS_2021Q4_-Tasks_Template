const { Router } = require('express');
const User = require('./user.model');
const usersService = require('./user.service');

const router = new Router();

router.get('/', async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.post('/', async (req, res) => {
  const user = await usersService.createUser(new User(req.body));
  res.status(201).json(User.toResponse(user));
});

router.get('/:id', async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.json(User.toResponse(user));
});

// router.put('/:id', async (req, res) => {
//   const user = await usersService.putById(req.body, req.params.id);
//   res.json(User.toResponse(user));
// });

router.put('/:id', async (req, res) => {
  try {
    const user = await usersService.putById(req.body, req.params.id);
    if (user) {
      res.status(200).json(User.toResponse(user));
    } else {
      res.status(400).json('Bad request');
    }
  } catch (error) {
    res.status(401).json('Access token is missing or invalid');
  }

});

router.delete('/:id', async (req, res) => {
  const status = await usersService.deleteById(req.params.id);
  res.status(status).send();
});


module.exports = router;
