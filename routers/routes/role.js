const express = require("express");
const roleRouter = express.Router();

const { newRole } = require("../controllers/role");

roleRouter.post("/newRole", newRole);

module.exports = roleRouter;
