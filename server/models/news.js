'use strict';
module.exports = function(sequelize, DataTypes) {
  var News = sequelize.define('News', {
    userId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    userShowId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    followingId: DataTypes.INTEGER,
    newsType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return News;
};