'use strict';
module.exports = function(sequelize, DataTypes) {
  var Relationships = sequelize.define('Relationships', {
    followedId: DataTypes.INTEGER,
    followerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Relationships.belongsTo(models.Users, {
            foreignKey: 'followerId'
        });

        associate: function(models) {
          Relationships.belongsTo(models.Users, {
              foreignKey: 'followedId'
          });
        // associations can be defined here
      }
    }
  });
  return Relationships;
};
