'use strict';
const { Model } = require('sequelize');
const { Student } = require('./student');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Subject.belongsToMany(models.Student, {
        through: models.StudentSubjects,
      });
    }
  }
  Subject.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
      },
      hours: {
        type: DataTypes.INTEGER,
        defaultValue: 54,
        validate: {
          min: 0,
          max: 120,
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Subject',
    }
  );
  return Subject;
};
