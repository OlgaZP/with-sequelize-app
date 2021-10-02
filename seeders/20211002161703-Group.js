'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          code: 'ITIT2021',
          department: 'Software Development',
          enteredAt: new Date(2021, 8, 1),
        },
        {
          code: 'ITIT2020',
          department: 'Software Development',
          enteredAt: new Date(2020, 8, 1),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
