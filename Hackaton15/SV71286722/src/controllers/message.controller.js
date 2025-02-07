import { MessageModel } from "../models/index.js"

export class MessageController{
    static async getMessages(req, res){
        const messages = await MessageModel.getMessages()
        if(!messages.length){
            return res.json({ message : "No hay mensajes" })
        }
        res.json(messages)
    }

    static async getMessagesbyUser(req, res){
        const userID = req.session.user.id
        const messages = await MessageModel.getMessagesbyUser(userID)
        if(!messages.length){
            return res.json({ message : "No tiene mensajes" })
        }
        res.json(messages)
    }

    static async createMessage(req, res){
        const inputMessage = req.body.message
        const userID = req.session.user.id
        const input = {message: inputMessage, userID}
        const message = await MessageModel.createMessage(input)
        if(!message){
            return res.json({ message : "No se pudo crear el mensaje"})
        }
        res.json(message)
    }

    static async updateMessage(req, res){
        const inputMessage = req.body.message
        const userID = req.session.user.id
        const input = {message: inputMessage, userID}
        const id = req.params.id
        const isUpdated = await MessageModel.updateMessage(id, input)
        if(!isUpdated[0]){
            return res.json({ message : "No se actualizó"})
        }
        res.json({ id : id , ...input})
    }

    static async deleteMessage(req, res){
        const userID = req.session.user.id
        const id = req.params.id
        const isDeleted = await MessageModel.deleteMessage(id, userID)
        if(!isDeleted){
            return res.json({ message: "No se eliminó"})
        }
        res.json({ message : `Se eliminó el mensaje con ID: ${id}`})
    }
}