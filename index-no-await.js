const express = require("express");
const routes = require('./routers');
const bodyParser = require("body-parser");
const before = require("./middleware/before.middleware");
const after = require("./middleware/after.middleware");

const app = express();
app.use(before)
app.use(bodyParser.json())
app.use(after)

// require('./routers').defineRoutes(app);
// routes();
require('./routers')(app);


const db = require('./db');
db.initDB().then(()=>{
    const port = process.env.PORT || 8080

    app.listen(port, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Server is up: ' + port);

             db.models.employee.build({
                 name:"Dudu"
             }).save().then((modelInstance)=>{
                let b = 34;
             }).catch((err)=>{
                console.error(err);
             })


            db.models.employee.create({
                name:"Dudu 2"
            }).then((modelInstance)=>{
               let b = 34;
            }).catch((err)=>{
               console.error(err);
            })

             let a= 3;
        }
    })
}).catch((err)=>{
    console.error(err);
    throw err;
})


