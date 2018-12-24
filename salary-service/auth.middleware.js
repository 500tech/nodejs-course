const jwt = require("jsonwebtoken");

function auth(options) {

    return function (req, res, next) {
        const token =
            //req.cookies.cellebrite ||
            req.headers['x-cellebrite-auth'];

        let userId;
        try {
            console.time('jwt.verify');
            userId = jwt.verify(token, "TopSecretString")
            console.timeEnd('jwt.verify');
        } catch (err) {
            res.sendStatus(401);
        }

        if (options.includeUser) {
            //await db.getUserByToken(token)
        }
        if (userId) {
            req.user = {
                userId, token
            }
            next();
        } else {
            res.sendStatus(401);
        }

    }
}

// function settings(options) {

//     return auth;
//     // return (req, res, next, options) => {
//     //     auth(req, res, next, options)
//     // }
// }

module.exports = auth;