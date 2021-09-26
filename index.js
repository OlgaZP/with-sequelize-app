const { Student } = require('./models');

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

  const createdStudent = await Student.create(newStudent, { raw: true });
  console.log(`createdStudent`, createdStudent);
})();
