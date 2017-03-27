const Comments = require("../models").Comments;
const Reviews = require("../models").Reviews;

module.exports = {
  create (req, res) {
      Comments.create({
      review: req.body.review,
      comment: req.body.comment,
    })
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error));
  },

  getCommentReview (req, res) {
    Comments.findById(req.params.id, {
      include: [
        {model: Reviews, attributes: ['review']},
        // {model: Comments, include: {
        //   model: Users, attributes: ['username']
        // }
      //   }
       ]
    })
    .then(photo => res.status(201).send(photo))
    .catch(error => res.status(400).send(error));
  }
}
