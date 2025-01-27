import { ProductModel } from "../models/index.js";

export class ProductController{

    static async getProducts(req, res){
        const products = await ProductModel.getProducts()
        if(!products){
            return res.json({ message : "No hay productos" })
        }
        res.json(products)
    }

    static async createProduct(req, res){
        const input = req.body
        const product = await ProductModel.createProduct(input)
        if(!product){
            return res.json({ message : "No se pudo crear el producto" }) 
        }
        res.json(product)
    }

    static async updateProduct(req, res){
        const id = req.params.id
        const input = req.body
        const isUpdated = await ProductModel.updateProduct(input)
        if(!isUpdated){
            return res.json({ message: `No se actualizó el producto con ID: ${id}` })
        }
        res.json({ message: `Se actualizó el producto con ID: ${id}`, id: id, ...input})
    }

    static async deleteProduct(req, res){
        const id = req.params.id
        const isDeleted = await ProductModel.deleteProduct(id)
        if(!isDeleted){
            return res.json({ message: `No se eliminó el producto con ID: ${id}`})
        }
        res.json({ message: `Se eliminó el producto con ID: ${id}` })
    }

    static async getProductbyID(req, res){
        const id  = req.params.id
        const product = await ProductModel.getProductbyID(id)
        if(!product){
            return res.json({ message: "Producto no encontrado" })
        }
        res.json(product)
    }
}