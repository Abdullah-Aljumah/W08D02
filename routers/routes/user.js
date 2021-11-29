const express = require("express");
const userRouter = express.Router();

const { resgister, getUsers, login } = require("../controllers/user");

userRouter.post("/resgister", resgister);
userRouter.get("/users", getUsers);
userRouter.post("/LOGIN", login);

module.exports = userRouter;
