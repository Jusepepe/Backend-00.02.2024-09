import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

export const productRoute = Router()

productRoute.get('/', ProductController.getProducts)
productRoute.get('/:id', ProductController.getProductbyID)

productRoute.post('/', ProductController.createProduct)

productRoute.patch('/:id', ProductController.updateProduct)

productRoute.delete('/:id', ProductController.deleteProduct)