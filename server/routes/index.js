// Require your controllers here
const UsersController = require("../controllers/UsersController");
const UserShowsController = require("../controllers/UserShowsController");
const ReviewsController = require("../controllers/ReviewsController");

module.exports = (app) => {
  // Add your routes here
  app.post('/users',UsersController.create);
  app.post('/usershows',UserShowsController.create);
  app.get('/usershows/:id',UserShowsController.getShowUser);
  app.post('/reviews',ReviewsController.create);
  app.get('/reviews/:id',ReviewsController.getReviewShow);
};
