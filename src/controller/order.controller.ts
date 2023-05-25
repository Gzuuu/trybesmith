import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (_req: Request, res: Response): Promise<void> => {
  const orders = await orderService.getOrders();

  res.status(200).json(orders);
};

export default {
  getAllOrders,
};