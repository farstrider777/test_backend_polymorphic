AddReviewrColumtoCommennts

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.addColumn(
        'Comments',
        'reviewerId',
        Sequelize.INTEGER
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Comments',
      'reviewerId',
      Sequelize.INTEGER
    )
  }
};

createNews

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      reviewId: {
        type: Sequelize.INTEGER
      },
      userShowId: {
        type: Sequelize.INTEGER
      },
      commentId: {
        type: Sequelize.INTEGER
      },
      followingId: {
        type: Sequelize.INTEGER
      },
      newsType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('News');
  }
};

createRelationships

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Relationships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      followedId: {
        type: Sequelize.INTEGER
      },
      followerId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Relationships');
  }
};

MODELS
relationships
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

MODELS
news
'use strict';
module.exports = function(sequelize, DataTypes) {
  var News = sequelize.define('News', {
    userId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    userShowId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    followingId: DataTypes.INTEGER,
    newsType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        News.belongsTo(models.Users, {
            foreignKey: 'userId'
        });
        // associations can be defined here

        News.belongsTo(models.Relationships, {
            foreignKey: 'followingId'
        });

      }
    }
  });
  return News;
};
