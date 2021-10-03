'use strict';

const studDbData = [];

for (let i = 0; i <= 100; i++) {
  studDbData.push({
    firstName: `Stud${i}`,
    lastName: `SurnameStud${i}`,
    email: `stud${i}@gmail.com`,
    birthday: new Date(
      2000 + Math.trunc(Math.random() * 10),
      Math.trunc(Math.random() * 11),
      Math.trunc(Math.random() * 28)
    ),
    isPrivatePayed: Math.random() > 0.25 ? false : true,
    discount: Math.trunc(Math.random() * 5),
    gender: Math.random() > 0.5 ? 'male' : 'female',
    groupId: Math.random() > 0.5 ? 1 : 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', studDbData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
