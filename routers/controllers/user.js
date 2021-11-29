const userROuter = require("../../db/models/user");

const newUser = (req, res) => {
  const { email, password, role } = req.body;

  const newUser = new userROuter({
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

module.exports = { newUser };
