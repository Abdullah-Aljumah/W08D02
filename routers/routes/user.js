const express = require("express");
const userRouter = express.Router();

const { newUser, getUsers } = require("../controllers/user");

userRouter.post("/newUser", newUser);
userRouter.get("/users", getUsers);

module.exports = userRouter;
