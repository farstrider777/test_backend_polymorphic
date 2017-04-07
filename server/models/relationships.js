'use strict';
module.exports = function(sequelize, DataTypes) {
  var Relationships = sequelize.define('Relationships', {
    followedId: DataTypes.INTEGER,
    followerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Relationships.belongsTo(models.Users, {
            foreignKey: 'followerId',
            as: 'following'
        });

        Relationships.belongsTo(models.Users, {
            foreignKey: 'followedId',
            as: 'followers'
        });
        // associations can be defined here
        Relationships.hasOne(models.News, {
            foreignKey: 'followingId',
            //as: 'followers'
        });
      }
    }
  });
  return Relationships;
};
