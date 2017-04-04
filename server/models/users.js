'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    salt: DataTypes.STRING,
    profileUrl: DataTypes.STRING,
    backgroundUrl: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
  }, {
    classMethods: {

      associate: function(models) {
        Users.hasMany(models.UserShows, {
          foreignKey: 'userId'
        });

        Users.hasMany(models.Reviews, {
          foreignKey: 'userId'
        });
      }
      //associate2

    }
  });
  return Users;
};
