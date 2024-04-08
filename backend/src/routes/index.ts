import { Router } from 'express';
import UsersController  from './users.routes';

const router = Router();

router.use('/', UsersController);

export default router;