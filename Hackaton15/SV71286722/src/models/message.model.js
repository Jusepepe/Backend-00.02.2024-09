import { DataTypes, Model } from "sequelize";
import { sequelize as database } from "../config/dbconfig.js";

export class MessageModel extends Model {

    static async getMessages(){
        const messages = await MessageModel.findAll()
        return messages 
    }

    static async getMessagesbyUser(userID){
        const messages = await MessageModel.findAll({where:{userID}})
        return messages 
    }

    static async createMessage(input){
        const messageCreated = await MessageModel.create({
            message: input.message,
            userID: input.userID })
        return messageCreated
    }

    static async updateMessage(id,  input){
        const messageUpdated = await MessageModel.update(
            {
                message: input.message
            } ,
            {
                where: { 
                    id,
                    userID: input.userID
                 }
            }
        )
        return messageUpdated
    }

    static async deleteMessage(id, userID){
        const messageDeleted = await MessageModel.destroy({where: {
                id,
                userID
            }
        })
        return messageDeleted
    }
}

MessageModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        message: {
            type: DataTypes.STRING
        },
    },
    { 
        timestamps: false,
        sequelize: database,
        modelName: 'Message',
    })
