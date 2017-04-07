const News = require("../models").News
const Users = require("../models").Users
const Relationships = require("../models").Relationships
const Comments = require("../models").Comments


module.exports = {
  getYourNews (req, res){
    News.findAll({
      include: [
        {model: Users},
        {model: Relationships},
        {model: Comments}
      ],
      order: [
        ['id', 'DESC']
      ],
      where: {
        userId: req.params.userId
      },
    })
    .then((review)=> res.status(200).send(review))
    .catch(error => res.status(400).send(error));
  },
}
