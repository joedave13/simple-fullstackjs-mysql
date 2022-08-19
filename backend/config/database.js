import { Sequelize } from 'sequelize';

const db = new Sequelize('student-crud', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
