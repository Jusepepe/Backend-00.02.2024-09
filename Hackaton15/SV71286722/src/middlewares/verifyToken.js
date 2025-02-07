import jwt from "jsonwebtoken"

export function verifyToken(req, res, next){
    const token = req.cookies.access_token
    req.session = { user : null }
    try{
        const data = jwt.verify(token, "123456789")
        req.session.user = data
    }catch{}
    next()
}