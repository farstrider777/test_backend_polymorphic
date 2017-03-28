const Users = require("../models").Users
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secret");

module.exports = {
  login (req, res) {
     Users.findOne({
       where: {
         email: req.body.email
       }
     })
       .then(user => {
         if (!user) {
           return res.status(401).send({ message: "No such email or wrong password." });
         }
         var input = bcrypt.hashSync(req.body.hashedPassword, user.salt);
         if (input === user.hashedPassword) {
           var token = jwt.encode({ id: user.id, name: user.userName }, appSecrets.jwtSecret);
           var json = {
             user: user,
             token: token
           };
           return res.status(200).send(json);
         } else {
           return res.status(401).send({ message: "No such email or wrong password." });
         }
      })
       .catch(error => res.status(400).send(error));
    },


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

  index (req, res) {
      Users.findAll()
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
    },

};
