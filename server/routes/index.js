// Require your controllers here
const UsersController = require("../controllers/UsersController");
const UserShowsController = require("../controllers/UserShowsController");
const ReviewsController = require("../controllers/ReviewsController");
const CommentsController = require("../controllers/CommentsController");

module.exports = (app) => {
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  // app.get('/reviews', ReviewsController.index)
  app.post('/users',UsersController.create);
  app.post('/login',UsersController.login)
  app.get('/users',UsersController.index)
  app.post('/usershows',UserShowsController.create);
  app.get('/usershows/:id',UserShowsController.getShowUser);
  app.post('/reviews',ReviewsController.create);
  app.get('/reviews/:id',ReviewsController.getReviewShow);
  app.post('/comments',CommentsController.create);
  app.get('/comments/:id',CommentsController.getCommentReview);
};
