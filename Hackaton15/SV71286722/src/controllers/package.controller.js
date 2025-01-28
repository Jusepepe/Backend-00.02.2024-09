import { PackageModel, ProductModel } from "../models/index.js";

export class PackageController{

    static async getPackages(req, res){
        const carts = await PackageModel.getPackages()
        if(!carts){
            return res.json({ message : "No hay paquetes" })
        }
        res.json(carts)
    }

    static async updatePackage(req, res){
        const id = req.params.id
        const input = req.body
        const isUpdated = await PackageModel.updatePackage(input)
        if(!isUpdated){
            return res.json({ message: `No se actualizó el paquete con ID: ${id}` })
        }
        res.json({ message: `Se actualizó el paquete con ID: ${id}`, id: id, ...input})
    }

    static async getPackageProducts(req, res){
        const id = req.params.id
        const cart = await PackageModel.getPackagebyID(id)
        if(!cart){
            return res.json({ message : "No existe el paquete" })
        }
        const products = await cart.getProducts()
        if(!products){
            return res.json({ message : "Paquete sin productos" })
        }
        res.json(products)
    }

    static async deletePackage(req, res){
        const id = req.params.id
        const isDeleted = await PackageModel.deletePackage(id)
        if(!isDeleted){
            return res.json({ message: `No se eliminó el paquete con ID: ${id}`})
        }
        res.json({ message: `Se eliminó el paquete con ID: ${id}` })
    }

    static async createPackage(req, res){
        const input = req.body
        const cart = await PackageModel.createPackage(input)
        if(!cart){
            return res.json({ message : "No se pudo crear el paquete " }) 
        }
        res.json(cart)
    }

    static async addProduct(req, res){
        const PackageId = req.params.id
        const ProductID = req.params.product
        const quantity = req.params.quantity
        const cart = await PackageModel.getPackagebyID(PackageId)
        if(!cart){
            return res.json({ message: "No se encontró el paquete"})
        }
        const product = await ProductModel.getProductbyID(ProductID)
        if(!product){
            return res.json({ message: "No se encontró el producto"})
        }
        if(product.stock < quantity){
            return res.json({ message: "No hay suficiente stock"})
        }
        await cart.addProduct(product, { through : { quantity } } )
        await product.decrement({ stock : quantity })
        res.json({ message: "Se añadió el producto", product })
    }

    static async removeProduct(req, res){
        //Arreglar forma de remover productos
        const PackageId = req.params.id
        const ProductID = req.params.product
        const quantity = req.params.quantity
        const cart = await PackageModel.getPackagebyID(PackageId)
        if(!cart){
            return res.json({ message: "No se encontró el paquete"})
        }
        const product = await ProductModel.getProductbyID(ProductID)
        if(!product){
            return res.json({ message: "No se encontró el producto"})
        }
        await cart.removeProduct(product)
        await product.increment({ stock : quantity })
        res.json({ message: "Se removió el producto", product })
    }
}