import { Router } from "express"
import { MessageController } from "../controllers/message.controller.js"
import { verifySignIn } from "../middlewares/verifySignIn.js"

export const messageRoute = Router()

messageRoute.use(verifySignIn)
messageRoute.get('/', MessageController.getMessages)
messageRoute.get('/myMessages', MessageController.getMessagesbyUser)
messageRoute.post('/', MessageController.createMessage)
messageRoute.patch('/:id', MessageController.updateMessage)
messageRoute.delete('/:id', MessageController.deleteMessage)