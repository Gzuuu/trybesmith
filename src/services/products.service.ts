import ProductModel from "../database/models/product.model";
import { ProductInputtableTypes } from "../database/models/product.model";

export async function insertProduct({ name, orderId, price } : ProductInputtableTypes) {

    const product = await ProductModel.create({ name, orderId, price });

    return product.dataValues;
}
