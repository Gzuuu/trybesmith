import { Request, Response } from 'express';
import { insertProduct } from '../services/products.service';

const newProduct = async (req: Request, res: Response) => {
    const { name, orderId, price } = req.body;

    const product = await insertProduct({ name, orderId, price });

    const { orderId: _orderId, ...withoutProductId } = product;

    return res.status(201).json(withoutProductId);
};


export default {
    newProduct,
};