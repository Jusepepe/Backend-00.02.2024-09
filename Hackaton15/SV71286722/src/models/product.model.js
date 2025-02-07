import { DataTypes, Model, where } from "sequelize";
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

    static async createProduct(input){
        const product = await ProductModel.create(input);
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

    static async incrementProduct(id, quantity){
        const isUpdated = await ProductModel.update({
            stock: this.sequelize.literal(`stock +${quantity}`)
        },
        {
            where: { id }
        })
        return isUpdated
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