import { UserModel } from "../models/index.js";
import axios from "axios"

export async function AuthGithub(req, res){
    const GithubClientID = 'Ov23liz0WfIJgtbrpuxz'
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${GithubClientID}`)
}

export async function GithubCallback(req, res) {
    const { code } = req.query;
    const GithubClientID = 'Ov23liz0WfIJgtbrpuxz'

    const body = {
        client_id: GithubClientID,
        client_secret: '',
        code,
    };

    const options = { headers: { accept: "application/json" } };

    const { data:dataUser } = await axios.post(`https://github.com/login/oauth/access_token`,
        body,
        options
    );

    if(dataUser){
        const user = await UserModel.getUserbyEmail(dataUser.email)
        if(!user){
            const input = {
                correo: dataUser.email,
                oauthID : dataUser.id,
                authMethod : "Github"
            }
            const newUser = await UserModel.createOauthUser(input)
            const token = jwt.sign({id: newUser.id, correo: newUser.correo}, 
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
            .json("Usuario registrado con Github")
        }
        const token = jwt.sign({id: user.id, correo: user.correo}, 
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
        .json("Usuario logeado con Github")
    }

}