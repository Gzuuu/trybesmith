import { ValidOrder } from 'src/types/Order';
import OrderModel from '../database/models/order.model';

async function getOrders(): Promise<ValidOrder[]> {
  const orders = await OrderModel.findAll({
    include: 'productIds',
  });

  const dataValuesOrder = orders.map((order) => order.dataValues);

  const newOrders = dataValuesOrder.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds?.map((o) => o.id),
  })) as ValidOrder[];

  return newOrders;
}

export default {
  getOrders,
};