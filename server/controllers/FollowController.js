const Relationships = require("../models").Relationships;
const News = require("../models").News;

module.exports = {

  postFollow (req, res){
    Relationships.create({
      followerId: req.user.id,
      followedId: req.params.userId
    }).then(follow => {
      News.create({
        followingId: follow.id,
        newsType: 'follow'
      })
      .then(news => res.status(201).send(news))
      .catch(error => console.log(error))
    })
    //.then(reviews => res.status(201).send(reviews))
    .catch(error => console.log(error))
  },

  getFollowers (req, res){
    Relationships.findAll({
      // include: [
      //   {model: Users},
      //   {model: Comments}
      // ],
      // order: [
      //   ['id', 'DESC']
      // ],
      where: {
        followedId: req.params.userId
      },
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },

  getFollowing (req, res){
    Relationships.findAll({
      // include: [
      //   {model: Users},
      //   {model: Comments}
      // ],
      // order: [
      //   ['id', 'DESC']
      // ],
      where: {
        followerId: req.params.userId
      },
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },

  deleteFollowing (req, res){
    Relationships.destroy({
     where: {
                followedId:req.params.userId
            }
      })
    .then(reviews => res.status(201).send(reviews))
    .catch(error => res.status(400).send(error));
  }

}


// create (req, res) {
//     Comments.create({
//     review: req.body.review,
//     comment: req.body.comment,
//   }).then(comment => {
//     News.create({
//       commentId: comment.id,
//       newsType: 'comment'
//     })
//       .then(news => res.status(201).send(news))
//       .catch(error => console.log(error))
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(400).send(error);
//   });
// },
