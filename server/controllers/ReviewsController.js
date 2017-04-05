const Reviews = require("../models").Reviews;
const UserShows = require("../models").UserShows;
const Comments = require("../models").Comments;
const Users = require("../models").Users;
const News = require("../models").News;

module.exports = {
  create (req, res) {
    UserShows.findOrCreate({
      where: {
        userId: req.user.id,
        showId: req.body.showId,
        showName: req.body.showName,
      },
      defaults: {
        seenIt: true
      }
    })
    .then(userShow => {
      console.log("show is: ", req.body.showId)
      Reviews.create({
        //will change userId
      userId: req.user.id,
      showId: req.body.showId,
      //userShow: userShow.id,
      ranking: req.body.ranking,
      review: req.body.review,
      showName: req.body.showName,
      seenIt: true,
      posterPath: req.body.posterPath,
      backgroundPath: req.body.backgroundPath,
      showDescription: req.body.showDescription
    }).then(review => {
      News.create({
        userId: req.user.id,
        reviewId: review.id,
        newsType: 'review'
      })
        .then(news => res.status(201).send(news))
        .catch(error => console.log(error))
    })
    //.then(reviews => res.status(201).send(reviews))
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error));
},

  // getReviewShow (req, res) {
  //   Reviews.findById(req.params.id, {
  //     include: [
  //       //{model: UserShows, attributes: ['showName']},
  //       {model: Users,
  //         as: 'Users'
  //       }
  //       // {model: Comment, include: {
  //       //   model: User, attributes: ['username']
  //       //}
  //       //}
  //     ]
  //   })
  //   .then(photo => res.status(201).send(photo))
  //   .catch(error => res.status(400).send(error));
  // },


  getReviewsShow (req, res){
    Reviews.findAll({
      include: [
        {model: Users},
        {model: Comments}
      ],
      order: [
        ['id', 'DESC']
      ],
      where: {
        showId:req.params.showId
      },
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },

  getReviewsUser (req, res){
    Reviews.findAll({
      include: [
        {model: Users},
        {model: Comments}
      ],
      order: [
        ['id', 'DESC']
      ],
      where: {
        userId:req.params.userId
      }
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },

  deleteReview (req, res){
    Reviews.destroy({
     where: {
                id:req.params.id
            }
      })
    .then(reviews => res.status(201).send(reviews))
    .catch(error => res.status(400).send(error));
  }

}
