import { Options } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const config: Options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'Trybesmith',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

export = config;