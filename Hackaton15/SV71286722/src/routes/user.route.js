import { Router } from "express"
import { UserController } from "../controllers/user.controller.js"
import { verifySignIn } from "../middlewares/verifySignIn.js"

export const userRoute = Router()

userRoute.get('/find/:id', UserController.getUserbyID)
userRoute.get('/', UserController.getUsers)
userRoute.get('/messages', verifySignIn, UserController.getUserMessages)
userRoute.get('/packages', verifySignIn, UserController.getUserPackages)

userRoute.post('/register', UserController.registerUser)
userRoute.post('/login', UserController.login)
userRoute.post('/logout', UserController.logout)

userRoute.patch('/:id', UserController.updateUser)

userRoute.delete('/:id', UserController.deleteUser)