import { Router, Request, Response } from 'express';
import UserController from '../controller/User.controller';
import { ValidToken } from '../middleware/Validates';

const userController = new  UserController();

const router = Router();

router.post(
  '/users',
  (req: Request, res: Response) => userController.createUser(req, res)
);

router.post(
  '/users/login',
  (req: Request, res: Response) => userController.loginUser(req, res)
);

router.post(
  '/users/token',
  ValidToken,
  (req: Request, res: Response) => userController.GetUserByToken(req, res)
);


router.get(
  '/users',
  (req: Request, res: Response) => userController.getAllUsers(req, res)
);

router.get(
  '/users/:id',
  (req: Request, res: Response) => userController.getUserById(req, res)
);

router.get(
  '/users/email/:email',
  (req: Request, res: Response) => userController.getUserByEmail(req, res)
);

router.put(
  '/users/:id',
  (req: Request, res: Response) => userController.updateUser(req, res)
);

router.delete(
  '/users/:id',
  (req: Request, res: Response) => userController.deleteUser(req, res)
);

export default router;