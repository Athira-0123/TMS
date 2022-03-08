const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header('x-access-token');
        console.log(token)
        if (!token)
            return res.status(401).json({ 
                isLoggedIn:false,
                msg: "Invalid token, access denied"
             });
        const verified = jwt.verify(token, 'hornbill');
        
        if (!verified)
            return res.status(401).json({ 
                isLoggedIn:false,
                msg: "Token verification failed" 
            });
        
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

    
    
}
module.exports = auth;