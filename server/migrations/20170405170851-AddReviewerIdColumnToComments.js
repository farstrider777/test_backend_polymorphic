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
