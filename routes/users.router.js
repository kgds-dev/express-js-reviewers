const express = require('express');

const usersController = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.post('/signup', usersController.addUser); //http://localhost:8080/users/signup
userRouter.post('/login', usersController.login); //http://localhost:8080/users/login
userRouter.get('/getUsers', usersController.getAllUsers); //http://localhost:8080/users/getUsers
userRouter.put('/change-password', usersController.changePassword); //http://localhost:8080/users/change-password

module.exports = userRouter;
