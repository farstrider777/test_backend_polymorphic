'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {
    review: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Comments.belongsTo(models.Reviews,{
          foreignKey: 'id'
        })
      },

      // associate: function(models) {
      //   UserShows.hasOne(models.Reviews, {
      //       foreignKey: 'userShow'
      //   })
      // }
    }
  });
  return Comments;
};
