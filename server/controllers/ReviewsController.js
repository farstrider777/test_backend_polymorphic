const Reviews = require("../models").Reviews;
const UserShows = require("../models").UserShows;
const Contacts = require("../models").Contacts;
const Users = require("../models").Users;

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
    })
    .then(reviews => res.status(201).send(reviews))
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
        //{model: UserShows, attributes: ['showName']},
        {model: Users}
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
      where: {
        userId:req.params.userId
      }
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },

}
