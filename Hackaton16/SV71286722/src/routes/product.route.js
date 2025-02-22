import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

export const productRouter = Router();

productRouter.get('/', ProductController.getProducts);
productRouter.get('/:id', ProductController.getProductbyID);

productRouter.post('/', ProductController.createProduct);

productRouter.patch('/:id/:quantity', ProductController.increaseStock);