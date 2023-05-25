import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type FormattedOrders = {
  id: number,
  userId: number,
  productIds: Product[],
};

export type ValidOrder = {
  id: number,
  userId: number,
  productIds: number[]
};
