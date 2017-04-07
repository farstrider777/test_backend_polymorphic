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

        // Users.belongsToMany(models.Users, {
        //   through: 'Relationships',
        //   foreignKey: 'followedId',
        //   as: 'followers'
        // })

        Users.hasMany(models.Relationships, {
          foreignKey: 'followerId',
          as: 'following'
        });

        Users.hasMany(models.Relationships, {
          foreignKey: 'followedId',
          as: 'followers'
        });

        Users.hasMany(models.News, {
          foreignKey: 'userId',
          //as: 'followers'
        });
      }
      //associate2

    }
  });
  return Users;
};
