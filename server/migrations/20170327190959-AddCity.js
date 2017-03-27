'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  return  queryInterface.addColumn(
      'Users',
      'city',
      Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Users',
      'city',
      Sequelize.STRING
    )
  }
};
