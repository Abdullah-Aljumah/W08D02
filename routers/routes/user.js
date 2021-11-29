const express = require("express");
const userRouter = express.Router();

const { newUser } = require("../controllers/user");

userRouter.post("/newUser", newUser);

module.exports = userRouter;
