const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization").split(' ')[1];
        if (!token)
            return res.status(401).json({ msg: "Invalid token, access denied" });
        const verified = jwt.verify(token, 'hornbill');
        if (!verified)
            return res.status(401).json({ msg: "Token verification failed" });
        req.user = verified.username;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports = auth;