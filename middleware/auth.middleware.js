function auth(req, res, next) {
    if (req.query.auth === "123") {
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = auth;