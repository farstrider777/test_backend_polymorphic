'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.addColumn(
        'Reviews',
        'showId',
        Sequelize.INTEGER
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Reviews',
      'showId',
      Sequelize.INTEGER
    )
  }
};
