import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Create a new instance of Sequelize
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE, // Database name
  process.env.MYSQL_USER,     // Username
  process.env.MYSQL_PASSWORD, // Password
  {
    host: process.env.MYSQL_HOST, // Database host
    dialect: 'mysql', // Database dialect
    logging: false, // Set to true if you want to see SQL queries
  }
);

const databaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully...');
  } catch (error) {
    console.error('Database connection failed');
    console.error(error);
  }
};

export default databaseConnection;
