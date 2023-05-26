import { Request, Response } from 'express';
import { login } from '../services/user.service';

const handleLogin = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  const { status, data } = await login(username, password);

  if (status === 'SUCCESSFUL') {
    return res.status(200).json(data);
  }
  return res.status(401).json(data);
};

export default {
  handleLogin,
};