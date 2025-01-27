import { Router } from "express";
import { PackageController } from "../controllers/package.controller.js";

export const packageRoute = Router()

packageRoute.get('/', PackageController.getPackages)
packageRoute.get('/:id/products', PackageController.getPackageProducts)

packageRoute.post('/', PackageController.createPackage)

packageRoute.patch('/:id', PackageController.updatePackage)
packageRoute.patch('/:id/add/:product/:quantity', PackageController.addProduct)
packageRoute.patch('/:id/remove/:product/:quantity', PackageController.removeProduct)

packageRoute.delete('/:id', PackageController.deletePackage)