import { Router } from "express";
import { PackageController } from "../controllers/package.controller.js";
import { verifySignIn } from "../middlewares/verifySignIn.js";

export const packageRoute = Router()

packageRoute.get('/', PackageController.getPackages)
packageRoute.get('/:id/products', verifySignIn, PackageController.getPackageProducts)
packageRoute.get('/myPackages', verifySignIn, PackageController.getPackagesbyUser)

packageRoute.post('/', PackageController.createPackage)

packageRoute.patch('/:id', PackageController.updatePackage)
packageRoute.patch('/:id/add/:product/:quantity', PackageController.addProduct)
packageRoute.patch('/:id/remove/:product', PackageController.removeProduct)

packageRoute.delete('/:id', PackageController.deletePackage)