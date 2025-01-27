import { DataTypes, Model } from "sequelize";
import { sequelize as database } from "../config/dbconfig.js";

export class ProductModel extends Model {

    static async getProducts(){
        const products = await ProductModel.findAll();
        return products
    }

    static async getProductbyID(id){
        const product = await ProductModel.findByPk(id);
        return product
    }

    static async getProductsbyID(ids, quantity){
        const product = await ProductModel.findAll({
            where: {
                id:  ids,
                stock: {
                    [Op.gte] : quantity
                }
            }
        });
        return product
    }

    static async createProduct(){
        const product = await ProductModel.create();
        return product
    }

    static async updateProduct(id, input){
        const productUpdated = await ProductModel.update(
            input,
            {
                where:{ id }
            }
        )
        return productUpdated
    }

    static async deleteProduct(id){
        const productDeleted = await ProductModel.destroy({ where : { id } })
        return productDeleted
    }
}

ProductModel.init(
    {
        nombre: {
            type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.FLOAT
        }

    },
    {
        timestamps: false,
        sequelize: database,
        modelName: 'Product'
    }
)