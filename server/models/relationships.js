'use strict';
module.exports = function(sequelize, DataTypes) {
  var Relationships = sequelize.define('Relationships', {
    followedId: DataTypes.INTEGER,
    followerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Reviews.belongsTo(models.Users, {
            foreignKey: 'followerId'
        });
        // associations can be defined here
      }
    }
  });
  return Relationships;
};
