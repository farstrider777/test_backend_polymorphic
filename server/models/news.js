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
        News.belongsTo(models.Users, {
            foreignKey: 'userId'
        });
        // associations can be defined here

        News.belongsTo(models.Relationships, {
            foreignKey: 'followingId'
        });

        News.belongsTo(models.Comments, {
            foreignKey: 'commentId'
        });

        News.belongsTo(models.Reviews, {
            foreignKey: 'reviewId'
        });
      }
    }
  });
  return News;
};
