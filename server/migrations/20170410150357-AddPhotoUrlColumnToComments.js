'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.addColumn(
        'Comments',
        'profileUrl',
        Sequelize.STRING
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Comments',
      'profileUrl',
      Sequelize.STRING
    )
  }
};
