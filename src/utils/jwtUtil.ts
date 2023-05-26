import jwt from 'jsonwebtoken';
import { UserPayload } from 'src/types/User';

const secret = process.env.SECRET || 'cebola';

const sign = (payload: UserPayload): string => {
  const token = jwt.sign(payload, secret);

  return token;
};

export default {
  sign,
};