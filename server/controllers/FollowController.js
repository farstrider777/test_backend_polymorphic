const Relationships = require("../models").Relationships;
const News = require("../models").News;
const Users = require("../models").Users;

module.exports = {

  postFollow (req, res){
    Relationships.create({
      followerId: req.user.id,
      followedId: req.params.userId
    })
    // .then(follow => {
    //   News.create({
    //     userId: req.user.id,
    //     followingId: follow.id,
    //     newsType: 'follow'
    //   })
    //   .then(news => res.status(201).send(news))
    //   .catch(error => console.log(error))
    // })
    .then(reviews => res.status(201).send(reviews))
    .catch(error => console.log(error))
  },

  getFollowers (req, res){
    Relationships.findAll({
      include: [
        {model: Users, as: 'following'},
      ],
      order: [
        ['id', 'DESC']
      ],
      where: {
        followedId: req.params.userId
      },
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },

  // getProfile (req, res) {
  //   User.findById(req.params.id, {
  //     include: [{
  //       model: Relationships, as: 'following', include: [Users]
  //     }, {
  //       model: Relationships, as: 'followers', include: [Users]
  //     }, {
  //       model: Reviews
  //     }, {
  //       model: Comments
  //     }]
  //   })
  //   .then(user => res.status(200).send(user))
  // }

  getFollowing (req, res){
    Relationships.findAll({
      include: [
        {model: Users, as: 'followers'},
      ],
      order: [
        ['id', 'DESC']
      ],
      where: {
        followerId: req.params.userId
      },
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },

  // var foo = function (x, y, z) { body }
  // function whatever (args) { body }
  // (x, y, z) => { body }

  deleteFollowing (req, res){
    Relationships.destroy({
     where: {
                followedId:req.params.userId,
                followerId:req.user.id
            }
      })                   //res.send(201)
    .then(relationships => res.status(201).send({
      deletedId: req.params.userId,
      deletedCount: relationships
    }))
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    })
  }

}
