const Users = require("../models").Users
const Ranker = require("../models").Ranker

module.exports = {
  create (req, res){
    Ranker.create({
      userId: req.user.id,
      listId: req.body.listId,
      rankings: req.body.rankings
    })
    .then((rank)=> res.status(200).send(rank))
    .catch(error => res.status(400).send(error));
  },
}