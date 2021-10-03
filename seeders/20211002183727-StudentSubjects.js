'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StudentSubjects',
      [
        {
          StudentId: 10,
          SubjectId: 1,
          mark: 75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StudentId: 21,
          SubjectId: 2,
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StudentId: 2,
          SubjectId: 1,
          mark: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StudentId: 27,
          SubjectId: 2,
          mark: 85,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StudentSubjects', null, {});
  },
};
