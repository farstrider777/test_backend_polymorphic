'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define('Reviews', {
    ranking: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    showId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Reviews.belongsTo(models.UserShows,{
          foreignKey: 'userShow'
        })
      },

      associate: function(models) {
        Reviews.hasMany(models.Comments, {
            foreignKey: 'id'
        })
      }


    }
  });
  return Reviews;
};
