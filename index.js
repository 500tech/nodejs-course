const express = require("express");
const routes = require('./routers');
const bodyParser = require("body-parser");
const before = require("./middleware/before.middleware");
const after = require("./middleware/after.middleware");

const app = express();
app.use(before)
app.use(bodyParser.json())
app.use(after);

const utils = require("util");

// require('./routers').defineRoutes(app);
app.listen = utils.promisify(app.listen);

// routes();
require('./routers')(app);


const db = require('./db');

(async function () {
    try {
        await db.initDB()
        const port = process.env.PORT || 8080

        await app.listen(port)
        console.log('Server is up: ' + port);


        await db.models.employee.build({ name: "Dudu" }).save()
        const dudu2 = await db.models.employee.create({ name: "Dudu 2" })
        console.log('dudu2')


    }
    catch (err) {
        console.error(err);
        throw err;
    }
})()


