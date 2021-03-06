const UserShows = require("../models").UserShows
const Users = require("../models").Users

module.exports = {
  create (req, res) {
      UserShows.create({
      userId: req.user.id,
      showId: req.body.showId,
      showName: req.body.showName,
      seenIt: req.body.seenIt
    })
    .then(usershows => res.status(201).send(usershows))
    .catch(error => res.status(400).send(error));
  },

  getShowUser (req, res) {
    UserShows.findById(req.params.id, {
      include: [
        {model: Users, attributes: ['userName']},
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
