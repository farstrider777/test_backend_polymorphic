const Users = require("../models").Users
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secret");

module.exports = {
  // create (req, res) {
  //  //res.status(200).send("Hello world!");
  //     Users.create({
  //     userName: req.body.userName,
  //     hashedPassword: req.body.hashedPassword,
  //     salt: req.body.salt,
  //     profileUrl: req.body.profileUrl,
  //     backgroundUrl: req.body.backgroundUrl,
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     city: req.body.city,
  //   })
  //   .then(users => res.status(201).send(users))
  //   .catch(error => res.status(400).send(error));
  // },


create (req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.hashedPassword, salt);
      Users.create({
      userName: req.body.userName,
      email: req.body.email,
      profileUrl: req.body.profileUrl,
      backgroundUrl: req.body.backgroundUrl,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      hashedPassword: hashedPass,
      salt: salt,
      //user_password: req.body.user_password,
    })
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error));
  },
};
