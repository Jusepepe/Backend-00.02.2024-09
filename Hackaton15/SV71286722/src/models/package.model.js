import { DataTypes, Model } from "sequelize";
import { sequelize as database } from "../config/dbconfig.js";

export class PackageModel extends Model {
    static async getPackages(){
        const carts = await PackageModel.findAll()
        return carts 
    }

    static async getPackagebyID(id){
        const carts = await PackageModel.findByPk(id)
        return carts 
    }

    static async createPackage( input ){
        const cartCreated = await PackageModel.create({
            ubicación: input.ubicacion,
            estado: input.estado,
            userID: input.userID,
        })
        return cartCreated
    }

    static async updatePackage(id,  input ){
        const cartUpdated = await PackageModel.update({
            ubicación: input.ubicacion,
            estado: input.estado
            },
            {
                where: { id }
            }
        )
        return cartUpdated
    }

    static async deletePackage(id){
        const cartDeleted = await PackageModel.update({
            estado: "Eliminado"
            },
            {
                where: { id }
            }
        )
        return cartDeleted
    }
}

PackageModel.init(
    {
        ubicación: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        sequelize: database,
        modelName: 'Package'
    }
)