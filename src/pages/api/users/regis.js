import { registerUserHandler } from '../handlers/userHandler';
import dbMiddleware from '../middlewares/dbMiddleware';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    return registerUserHandler(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default dbMiddleware(handler);
