import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const ValidToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const notBearer = token?.split(' ')[1];
  if (!notBearer) {
    return res.status(401).json({ message: 'Token is required' });
  }
  try {
    const isTokenValid = jwt.verify(notBearer, process.env.SECRET as string);
    
    if (!isTokenValid) {
      return res.status(401).json({ message: 'Token is invalid' });
    }
    const decode = jwt.decode(notBearer);
    req.body.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
}

export {
  ValidToken,
}