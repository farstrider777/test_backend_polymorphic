'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {
    review: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {

        Comments.belongsTo(models.Reviews,{
          foreignKey: 'review'
        });


        Comments.hasOne(models.News, {
            foreignKey: 'commentId',
            //as: 'followers'
          });
      },
    }
  });
  return Comments;
};
