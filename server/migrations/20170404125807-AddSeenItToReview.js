'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.addColumn(
        'Reviews',
        'seenIt',
        Sequelize.BOOLEAN
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Reviews',
      'seenIt',
      Sequelize.BOOLEAN
    )
  }
};
