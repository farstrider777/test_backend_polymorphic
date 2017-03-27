'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'profileUrl',
      Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Users',
      'profileUrl',
      Sequelize.STRING
    )
  }
};
