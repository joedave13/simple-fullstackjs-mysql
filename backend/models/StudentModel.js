import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Student = db.define(
  'students',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    sin: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Student;

(async () => {
  await db.sync();
})();
