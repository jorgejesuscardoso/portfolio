import { Router, Request, Response } from 'express';
import UserController from '../controller/User.controller';

const userController = new  UserController();

const router = Router();

router.post(
  '/user',
  (req: Request, res: Response) => userController.createUser(req, res)
);

router.get(
  '/user',
  (req: Request, res: Response) => userController.getAllUsers(req, res)
);

router.get(
  '/user/:id',
  (req: Request, res: Response) => userController.getUserById(req, res)
);

router.get(
  '/user/email/:email',
  (req: Request, res: Response) => userController.getUserByEmail(req, res)
);

router.put(
  '/user/:id',
  (req: Request, res: Response) => userController.updateUser(req, res)
);

router.delete(
  '/user/:id',
  (req: Request, res: Response) => userController.deleteUser(req, res)
);

export default router;