const Comments = require("../models").Comments;
const Reviews = require("../models").Reviews;
const News = require("../models").News;

module.exports = {
  create (req, res) {
      Comments.create({
      review: req.body.review,
      comment: req.body.comment,
      profileUrl: req.body.profileUrl,
      userName: req.body.userName
    }).then(comment => {
      News.create({
        userId: req.user.id,
        commentId: comment.id,
        newsType: 'comment'
      })
        .then(news => res.status(201).send(news))
        .catch(error => console.log(error))
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    });
  },

  getCommentReview (req, res) {
    Comments.findAll({
      include: [
        {model: Reviews, attributes: ['review']},
      ],
      order: [
        ['id', 'DESC']
      ],
       where: {
         review: req.params.id
       },

    })
    .then(photo => res.status(201).send(photo))
    .catch(error => res.status(400).send(error));
  }
}

// create (req, res) {
//   UserShows.findOrCreate({
//     where: {
//       userId: req.user.id,
//       showId: req.body.showId,
//       showName: req.body.showName,
//     },
//     defaults: {
//       seenIt: true
//     }
//   })
//   .then(userShow => {
//     console.log("show is: ", req.body.showId)
//     Reviews.create({
//       //will change userId
//     userId: req.user.id,
//     showId: req.body.showId,
//     //userShow: userShow.id,
//     ranking: req.body.ranking,
//     review: req.body.review,
//     showName: req.body.showName,
//     seenIt: true,
//     posterPath: req.body.posterPath,
//     backgroundPath: req.body.backgroundPath,
//     showDescription: req.body.showDescription
//   })
//   .then(reviews => res.status(201).send(reviews))
//   .catch(error => console.log(error))
// })
// .catch(error => console.log(error));
// },
