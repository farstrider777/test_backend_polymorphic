'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserShows = sequelize.define('UserShows', {
    userId: DataTypes.INTEGER,
    showId: DataTypes.INTEGER,
    showName: DataTypes.STRING,
    seenIt: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        UserShows.belongsTo(models.Users,{
          foreignKey: 'userId'
        })
      },

      // associate: function(models) {
      //   UserShows.hasOne(models.Reviews, {
      //       foreignKey: 'userShow'
      //   })
      // }

    }
  });
  return UserShows;
};
