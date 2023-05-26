import express from 'express';
import productRouter from './routes/product.router';
import orderRouter from './routes/order.router';
import userRouter from './routes/user.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', userRouter);

export default app;
