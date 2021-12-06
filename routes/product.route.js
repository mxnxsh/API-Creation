import express from 'express';

import { getProduct, seedProduct } from "../controllers/product.controllers.js";

const productRouter = express.Router();

productRouter.get('/seed', seedProduct);
productRouter.get('/get-products', getProduct);


export default productRouter
