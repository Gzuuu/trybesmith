import { Request, Response } from 'express';
import { findAll, insertProduct } from '../services/products.service';

const newProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await insertProduct(req.body);

  const { orderId, ...withoutProductId } = product;

  res.status(201).json(withoutProductId);
};

const listProducts = async (_req: Request, res: Response): Promise<void> => {
  const product = await findAll();

  res.status(200).json(product.data);
};

export default {
  newProduct,
  listProducts,
};