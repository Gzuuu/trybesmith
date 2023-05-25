import { Request, Response } from 'express';
import { findAll, insertProduct } from '../services/products.service';

const newProduct = async (req: Request, res: Response) => {
    const { name, orderId, price } = req.body;

    const product = await insertProduct({ name, orderId, price });

    const { orderId: _orderId, ...withoutProductId } = product;

    return res.status(201).json(withoutProductId);
};

const listProducts = async (_req: Request, res: Response) => {

    const product = await findAll();

    return res.status(200).json(product.data);
};


export default {
    newProduct,
    listProducts,
};