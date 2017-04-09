'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ranker = sequelize.define('Ranker', {
    userId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER,
    rankings: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ranker;
};