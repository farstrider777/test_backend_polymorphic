'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return  queryInterface.removeColumn(
        'Reviews',
        'userShow',
        Sequelize.INTEGER
      )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Reviews',
      'userShow',
      Sequelize.INTEGER
    )
  }
};
