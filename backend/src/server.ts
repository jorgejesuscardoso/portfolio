import { App } from './app';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;

new App().start(PORT);