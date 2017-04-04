'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define('Reviews', {
    ranking: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    showId: DataTypes.INTEGER,
    posterPath: DataTypes.STRING,
    backgroundPath: DataTypes.STRING,
    showName: DataTypes.STRING,
    showDescription: DataTypes.TEXT,
    seenIt: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      // associate: function(models) {
      //   Reviews.belongsTo(models.UserShows,{
      //     foreignKey: 'userShow'
      //   })
      // },

      associate: function(models) {
        Reviews.belongsTo(models.Users, {
            foreignKey: 'userId'
        });

        Reviews.hasMany(models.Comments, {
            foreignKey: 'review'
        });
      }


    }
  });
  return Reviews;
};
