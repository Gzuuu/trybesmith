import { Product } from '../types/Product';
import ProductModel, {
  ProductSequelizeModel,
  ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponse } from '../types/serviceResponse';

export async function insertProduct({
  name, orderId, price } : ProductInputtableTypes) : Promise<Product> {
  const product = await ProductModel.create({ name, orderId, price });

  return product.dataValues;
}

export async function findAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
}
