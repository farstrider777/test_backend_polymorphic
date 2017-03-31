// Require your controllers here
const UsersController = require("../controllers/UsersController");
const UserShowsController = require("../controllers/UserShowsController");
const ReviewsController = require("../controllers/ReviewsController");
const CommentsController = require("../controllers/CommentsController");
const middleware = require("../middleware");

module.exports = (app) => {
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
  next();
});
  // app.get('/reviews', ReviewsController.index)
  app.post('/users',UsersController.create);
  app.post('/login',UsersController.login);
  app.put('/updateuser',middleware.authenticate,UsersController.update);
  app.get('/users',UsersController.index);
  app.delete('/users/:id',UsersController.destroy);
  // maybe remove usershows route if we dont' use it to make watchlist or something
  app.post('/usershows', middleware.authenticate, UserShowsController.create);
  app.get('/usershows/:id',UserShowsController.getShowUser);
  app.post('/reviews', middleware.authenticate, ReviewsController.create);
  app.get('/reviews/:id',ReviewsController.getReviewsShow);
  app.post('/comments',CommentsController.create);
  app.get('/comments/:id',CommentsController.getCommentReview);
  app.get('/showreviews/:showId',ReviewsController.getReviewsShow);
  app.get('/userreviews/:userId',ReviewsController.getReviewsUser);
};
