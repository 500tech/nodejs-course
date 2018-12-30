function init() {
    const express = require("express");

    const app = express();

    app.get('/health-check', (req,res)=>{
        const {version, name} = require("../package.json");
        res.status(200).json({
            env:process.env.NODE_ENV || "NODE_ENV is empty",
            name,
            version
        })
    })

    const port = process.env.PORT || 8080;
    app.listen(port, (err) => {
        if(err) {
        console.error(err);
        throw err;
        } 
        console.log(`server is up: ${port}`)
    });

    return app
    
}

module.exports = init;