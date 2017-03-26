'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    classMethods: {

      associate: function(models) {
        Users.hasMany(models.UserShows, {
          foreignKey: 'userId'
        });
      }

      //associate2

    }
  });
  return Users;
};
