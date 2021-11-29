const userModel = require("../../db/models/user");

const newUser = (req, res) => {
  const { email, password, role } = req.body;

  const newUser = new userModel({
    email,
    password,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUsers = (req, res) => {
    userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports = { newUser, getUsers };
