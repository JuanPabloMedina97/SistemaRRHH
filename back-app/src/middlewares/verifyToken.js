const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) =>{
    const token = req.headers.authorization; 

    if(!token){
        return res.status(401).json({message: "No se proporcionó un token válido"});
    }

    try {
        const decoded = jwt.verify(token, 'tu_secreto_secreto');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Token invalido"});
    };
};


module.exports = verifyToken;