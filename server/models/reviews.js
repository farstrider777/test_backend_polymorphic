'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define('Reviews', {
    userShow: DataTypes.INTEGER,
    ranking: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Reviews.belongsTo(models.UserShows,{
          foreignKey: 'userShow'
        })
      }
    }
  });
  return Reviews;
};
