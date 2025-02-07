import { DataTypes, Model } from "sequelize";
import { sequelize as database } from "../config/dbconfig.js";
import bcrypt from "bcrypt"

export class UserModel extends Model {
    static async getUsers(){
        const users = await UserModel.findAll({attributes: {exclude:'contraseña'}})
        return users
    }

    static async createUser( input ){
        const { contraseña, ...data } = input
        const hashedPassword = await bcrypt.hash(contraseña, 10)
        const userCreated = await UserModel.create({
            ...data,
            contraseña: hashedPassword
        })
        return userCreated
    }

    static async createOauthUser( input ){
        const { correo, oauthID, authMethod } = input 
        const userCreated = await UserModel.create({
            correo,
            oauthID,
            authMethod
        })
        return userCreated
    }

    static async getUserbyEmail(correo){
        const user = await UserModel.findOne({ where: { correo } })
        return user
    }

    static async userLogin(correo, contraseña){
        const user = await UserModel.getUserbyEmail(correo)
        if(!user) return null
        const isValid = await bcrypt.compare(contraseña, user.contraseña)
        if(!isValid) return { message: "Contraseña Inválida" }
        const { contraseña: _, ...publicUser } = user.dataValues
        return publicUser
    }

    static async updateUser(id, input){
        const userUpdate = await UserModel.update(
            {
                nombre: input.nombre,
                apellido: input.apellido
            },
            {
                where: {id}
            }
        )
        return userUpdate
    }

    static async deleteUser(id){
        const userDeleted = await UserModel.update(
            {
                estadoCuenta : false
            },
            {
                where: {id}
            }
        )
        return userDeleted
    }

    static async getUserbyID(id){
        const user = await UserModel.findByPk(id)
        return user
    }
}

UserModel.init(
    {
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
            unique: true
        },
        contraseña: {
            type: DataTypes.STRING
        },
        estadoCuenta:{
            type: DataTypes.BOOLEAN
        },
        authMethod:{
            type: DataTypes.STRING
        },
        oauthID:{
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        sequelize: database,
        modelName: 'User'
    }
)