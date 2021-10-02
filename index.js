const { Student, sequelize } = require('./models');
const { Op } = require('sequelize');

(async function () {
  const newStudent = {
    firstName: 'Stud1',
    lastName: 'SurnameStud1',
    email: 'stud1@gmail.com',
    birthday: '2004-08-30',
    isPrivatePayed: false,
    discount: 0,
    gender: 'male',
  };

  // C - INSERT
  // const createdStudent = await Student.create(newStudent, { raw: true });
  // console.log(`createdStudent`, createdStudent);

  // R - SELECT
  //students with pure data and pagination
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   limit: 10,
  //   offset: 0,
  //   //add ordering
  //   order: [['discount', 'DESC'], 'firstName'],
  // });

  //filters
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     discount: 0,
  //   },
  //   limit: 5,
  //   offset: 0,
  // });

  //some filters with AND
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     discount: 0,
  //     isPrivatePayed: true,
  //   },
  //   limit: 5,
  //   offset: 0,
  // });

  //some filters OR
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     [Op.or]: [{ id: 1 }, { id: 2 }],
  //   },
  //   limit: 5,
  //   offset: 0,
  // });

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: {
  //     firstName: {
  //       [Op.like]: 'Stud1%',
  //     },
  //   },
  // });

  //proection = select displayed attributes
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: ['firstName', 'lastName', 'birthday'],
  //   limit: 5,
  //   offset: 0,
  // });

  //proection with excluded attributes
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: { exclude: ['email', 'createdAt', 'updatedAt'] },
  //   limit: 5,
  //   offset: 0,
  // });

  //displayed calculated result
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: [
  //     ['firstName', 'name'],
  //     'lastName',
  //     [sequelize.fn('age', sequelize.col('birthday')), 'studAge'],
  //   ],
  // });

  //extract some info from function result
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: [
  //     ['firstName', 'name'],
  //     'lastName',
  //     sequelize.literal(`EXTRACT (year FROM age(birthday))`),
  //   ],
  // });

  //group by
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: [
  //     'gender',
  //     [sequelize.fn('count', sequelize.col('gender')), 'countGender'],
  //   ],
  //   group: 'gender',
  // });

  //console.log(`foundStudents`, foundStudents);

  //U - update
  // const updatedStudents = await Student.update(
  //   { firstName: 'Irina' },
  //   { where: { id: 5 }, returning: true, raw: true }
  // );
  // console.log(`updatedStudents`, updatedStudents);

  //D - delete
  // const deletedStudents = await Student.destroy({
  //   where: { id: 95 },
  // });
  // console.log(`deletedStudents`, deletedStudents);
})();
