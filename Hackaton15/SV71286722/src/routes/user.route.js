import { Router } from "express"
import { UserController } from "../controllers/user.controller.js"

export const userRoute = Router()

userRoute.get('/:id', UserController.getUserbyID)
userRoute.get('/', UserController.getUsers)
userRoute.get('/:id/messages', UserController.getUserMessages)
userRoute.get('/:id/packages', UserController.getUserPackages)

userRoute.post('/register', UserController.registerUser)
userRoute.post('/login', UserController.login)
userRoute.post('/logout', UserController.logout)

userRoute.patch('/:id', UserController.updateUser)

userRoute.delete('/:id', UserController.deleteUser)