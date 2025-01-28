import "dotenv/config"
import express from "express"
import { messageRoute } from "../routes/message.route.js";
import { userRoute } from "../routes/user.route.js";
import { packageRoute } from "../routes/package.route.js";
import { productRoute } from "../routes/product.route.js";
import cookieParser from "cookie-parser";

export class Server{
    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cookieParser())
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.json( {message:"Hello World!"} )
        })
        this.app.use('/message', messageRoute)
        this.app.use('/user', userRoute)
        this.app.use('/package', packageRoute)
        this.app.use('/product', productRoute)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening on port http://localhost:${this.port}`)
        })
    }
}