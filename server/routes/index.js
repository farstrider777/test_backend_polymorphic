// Require your controllers here
const UsersController = require("../controllers/UsersController");
const UserShowsController = require("../controllers/UserShowsController");
const ReviewsController = require("../controllers/ReviewsController");
const CommentsController = require("../controllers/CommentsController");
const FollowController = require("../controllers/FollowController");
const NewsController = require("../controllers/NewsController");
const RankingsController = require("../controllers/RankingsController");
const middleware = require("../middleware");


module.exports = (app) => {
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
  next();
});
  // app.get('/reviews', ReviewsController.index)
  app.post('/users',UsersController.create);
  app.post('/login',UsersController.login);
  app.put('/updateuser',middleware.authenticate,UsersController.update);
  app.get('/users',UsersController.index);
  app.get('/users/:id',UsersController.getUser);
  app.delete('/usersdelete/:id',UsersController.destroy);
  // maybe remove usershows route if we dont' use it to make watchlist or something
  app.post('/usershows', middleware.authenticate, UserShowsController.create);
  app.get('/usershows/:id',UserShowsController.getShowUser);
  app.post('/reviews',middleware.authenticate, ReviewsController.create);
  //app.get('/reviews/:id',ReviewsController.getReviewsShow);
  app.delete('/deletereview/:id',ReviewsController.deleteReview);
  app.post('/comments',middleware.authenticate, CommentsController.create);
  app.get('/comments/:id',CommentsController.getCommentReview);
  app.get('/showreviews/:showId',ReviewsController.getReviewsShow);
  app.get('/userreviews/:userId',ReviewsController.getReviewsUser);
  app.get('/me',middleware.authenticate, UsersController.verify);
  app.post('/follow/:userId',middleware.authenticate, FollowController.postFollow);
  //app.delete('/deletefollower/:userId',FollowController.deleteFollower);
  app.get('/followers/:userId',FollowController.getFollowers);
  app.get('/following/:userId',FollowController.getFollowing);
  app.delete('/deletefollowing/:userId',middleware.authenticate,FollowController.deleteFollowing);
  app.get('/news/:userId',NewsController.getYourNews);
  app.post('/rankings/:userId',middleware.authenticate,RankingsController.create)
  app.get('/getrankings/:userId',RankingsController.getRankings)
  app.put('/updaterankings/:userId',middleware.authenticate,RankingsController.updateRankings)
};
