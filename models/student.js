'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Student.belongsTo(models.Group, {
        foreignKey: 'groupId',
      });

      Student.belongsToMany(models.Subject, {
        through: models.StudentSubjects,
      });
    }
  }
  Student.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,29}$/,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,29}$/,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
      },
      isPrivatePayed: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 10,
          isInt: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
