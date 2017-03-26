const Reviews = require("../models").Reviews;
const UserShows = require("../models").UserShows;

module.exports = {
  create (req, res) {
   //res.status(200).send("Hello world!");
      Reviews.create({
      userShow: req.body.userShow,
      ranking: req.body.ranking,
      review: req.body.review,
    })
    .then(reviews => res.status(201).send(reviews))
    .catch(error => res.status(400).send(error));
  },

  getReviewShow (req, res) {
    Reviews.findById(req.params.id, {
      include: [
        {model: UserShows, attributes: ['showName']},
        // {model: Comment, include: {
        //   model: User, attributes: ['username']
        //}
        //}
      ]
    })
    .then(photo => res.status(201).send(photo))
    .catch(error => res.status(400).send(error));
  }
}
