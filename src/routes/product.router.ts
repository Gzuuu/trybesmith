import { Router } from 'express';

import productsController from '../controller/products.controller';

const productRouter = Router();

productRouter.post('/', productsController.newProduct);
productRouter.get('/', productsController.listProducts);

export default productRouter;