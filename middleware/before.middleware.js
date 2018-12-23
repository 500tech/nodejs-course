function before (req, res, next) {
    if(req.body) {
        console.log(`This is the body: ${req.body}`);
    } else {
        console.log('No body');
        
    }

    req.user = {
        type:"admin"
    }

    next();
}

module.exports = before;