export function verifyToken(req, res, next){
    const token = req.cookies.acces_token
    req.session = { user : null }

    try{
        const data = jwt.verify(token, "123456789")
        req.session.user = data
    }catch{}
    next()
}