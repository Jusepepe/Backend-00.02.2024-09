import { DataTypes, Model } from "sequelize";
import { sequelize as database } from "../config/dbconfig.js";

export class PackageModel extends Model {
    static async getPackages(){
        const packages = await PackageModel.findAll()
        return packages 
    }

    static async getPackagebyID(id){
        const packages = await PackageModel.findByPk(id)
        return packages 
    }

    static async createPackage( input ){
        const packageCreated = await PackageModel.create({
            ubicación: input.ubicacion,
            estado: input.estado,
            userID: input.id,
        })
        return packageCreated
    }

    static async updatePackage(id,  input ){
        const packageUpdated = await PackageModel.update({
            ubicación: input.ubicacion,
            estado: input.estado
            },
            {
                where: { id }
            }
        )
        return packageUpdated
    }

    static async deletePackage(id){
        const packageDeleted = await PackageModel.update({
            estado: "Eliminado"
            },
            {
                where: { id }
            }
        )
        return packageDeleted
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