'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING,
        defaultValue: 0,
        allowNull: false
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING,
        defaultValue: 0,
        allowNull: false
      }
    )
  }
};
