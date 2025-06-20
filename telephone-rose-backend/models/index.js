import User from './modelUser.js';
import sequelize from '../config/database.js';

const db = {
  sequelize,
  User,
};

export default db;
