import { UserModel } from "../models/index.js";
import jwt from 'jsonwebtoken'

export class UserController{

    static async getUserbyID(req, res){
        const id  = req.params.id
        const user = await UserModel.getUserbyID(id)
        if(!user){
            return res.json({ message: "Usuario no encontrado" })
        }
        const { contraseña: _, ...publicUser } = user.dataValues
        res.json(publicUser)
    }

    static async getUsers(req, res){
        const users = await UserModel.getUsers()
        if(!users){
            return res.json({ message: "No hay usuarios" })
        }
        res.json(users)
    }

    static async getUserMessages(req, res){
        const id = req.session.user.id
        const user = await UserModel.getUserbyID(id)
        if(!user){
            return res.json({ message : "Usuario no econtrado" })
        }
        const messages = await user.getMessages()
        if(!messages.length){
            return res.json({ message : "No tiene mensajes"})
        }
        res.json(messages)
    }

    static async getUserPackages(req, res){
        const id = req.session.user.id
        const user = await UserModel.getUserbyID(id)
        if(!user){
            return res.json({ message : "Usuario no econtrado" })
        }
        const packages = await user.getPackages()
        if(!packages.length){
            return res.json({ message : "No tiene paquetes"})
        }
        res.json(packages)
    }

    static async registerUser(req, res){
        const input = req.body
        const user = await UserModel.createUser(input)
        if(!user){
            return res.json({ message : "No se pudo crear el usuario"})
        }
        res.json(user.id)
    }

    static async deleteUser(req, res){
        const id = req.params.id
        const user = await UserModel.deleteUser(id)
        if(!user){
            return res.json({ message: `No se eliminó el usuario con ID: ${id}`})
        }
        res.json({ message: `Se eliminó el usuario con ID: ${id}`})
    }

    static async updateUser(req, res){
        const id = req.params.id
        const input = req.body
        const user = await UserModel.updateUser(id, input)
        if(!user){
            return res.json({ message: `No se actualizó el usuario con ID: ${id}`})
        }
        res.json({ message: `Se actualizó el usuario con ID: ${id}`, id: id})
    }

    static async login(req, res){
        const { correo, contraseña } = req.body
        const result = await UserModel.userLogin(correo, contraseña)
        if(!result) return res.json({ message: "No existe el usuario"})
        const token = jwt.sign({id: result.id, correo: result.correo}, 
            "123456789",
            {
                algorithm: "HS256",
                allowInsecureKeySizes:true,
                expiresIn: 86400
            }
        )
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Strict',
        })
        .json(result)
    }

    static async logout(req, res){
        try{
            const correo = req.session.user.correo
            res.clearCookie('access_token')
            .json({ message: `Usuario deslogeado: ${correo}`})
        }catch(e){
            res.json({ message : e.message})
        }
    }

}