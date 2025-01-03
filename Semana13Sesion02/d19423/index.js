const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());

app.get('/', (req,res)=>{
    res.send({message:"Mi API"});
})


const AuthorizationRouter = require('./authorization/routes.config');
AuthorizationRouter.routesConfig(app);

const UsersRouter = require('./users/routes.config');
UsersRouter.routesConfig(app);

app.listen(PORT, function () {
    console.log('app listening at port %s', PORT);
});