'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.addColumn(
        'Reviews',
        'backgroundPath',
        Sequelize.STRING
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Reviews',
      'backgroundPath',
      Sequelize.STRING
    )
  }
};
