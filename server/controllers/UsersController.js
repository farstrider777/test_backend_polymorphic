const Users = require("../models").Users

module.exports = {
  create (req, res) {
   //res.status(200).send("Hello world!");
      Users.create({
      userName: req.body.userName,
      hashedPassword: req.body.hashedPassword,
      salt: req.body.salt,
    })
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error));
  },
}
