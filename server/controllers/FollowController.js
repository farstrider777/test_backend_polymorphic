const Relationships = require("../models").Relationships;


module.exports = {
  postFollow (req, res){
    Relationships.create({
      followerId: req.user.id,
      followedId: req.params.userId
    }).then(reviews => res.status(201).send(reviews))
    .catch(error => console.log(error))
  }
}
