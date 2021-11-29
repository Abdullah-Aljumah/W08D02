const userModel = require("../../db/models/user");

const resgister = (req, res) => {
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
};

const login = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email })
    .then((result) => {
      if (result) {
          console.log(result);
        if (result.email == email) {
          if (result.password == password) {
            res.status(200).json(result);
          } else {
            res.status(400).json("Wrong email or password");
          }
        } else {
          res.status(400).json("Wrong email or password");
        }
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { resgister, getUsers, login };
