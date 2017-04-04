'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.addColumn(
        'Reviews',
        'showName',
        Sequelize.STRING
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Reviews',
      'showName',
      Sequelize.STRING
    )
  }
};
