'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.addColumn(
        'Reviews',
        'showDescription',
        Sequelize.TEXT
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Reviews',
      'showDescription',
      Sequelize.TEXT
    )
  }
};
