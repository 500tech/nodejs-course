function after (req, res, next) {
    if(req.body) {
        console.log(`This is the body: ${JSON.stringify(req.body)}`);
    } else {
        console.log('No body');
        
    }

    console.log(JSON.stringify(req.user));

    // res.sendStatus(408);
    next();

}

module.exports = after;