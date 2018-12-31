const app = require("cellebrite-express")();
const routes = require('./routers');
const bodyParser = require("body-parser");
const before = require("./middleware/before.middleware");
const after = require("./middleware/after.middleware");
const express = require("express");
const contextService = require('request-context');

// const app = express();
app.set('view engine', 'ejs')

console.log('pm2')
app.use(before)
app.use(bodyParser.json())
app.use(after);
app.use((req,res,next)=>{
    contextService.set('requestId', req.headers['requestId'] || uuid())
})


const utils = require("util");

// require('./routers').defineRoutes(app);
// app.listen = utils.promisify(app.listen);

// routes();
const v1 = express.Router();
v1.get('/test', (req, res) => {
    res.json({ "version": "1" })
})

const v2 = express.Router();
v2.get('/test', (req, res) => {
    res.json({ "version": "2" })
})

app.use('/v1',v1);
app.use('/v2',v2);

require('./routers')(app);


const db = require('./db');

(async function () {
    try {
        await db.initDB()
        const port = process.env.PORT || 8080

        // await app.listen(port)
        // console.log('Server is up: ' + port);

        // // await db.models.employee.build({ name: "Dudu", email: "a@a.com" }).save()
        // const dudu2 = await db.models.employee.create({ name: "Dudu 2", email: "a@a.com" })
        // const dudu3 = await db.models.employee.create({ name: "Dudu 3", email: "b@a.com" })
        // const rnd = await db.models.department.create({ name: "R&D" });

        // dudu2.departmentId = rnd.id;
        // dudu3.departmentId = rnd.id;

        // await dudu2.save();
        // await dudu3.save();

        // const duduWithDept = await db.models.employee.findById(dudu2.id, {
        //     include: ['department']
        // });

        // const deptWithDudus = await db.models.department.findAll({
        //     where: {
        //         name: "R&D"
        //     },
        //     include: ['employees']
        // })


        // console.log(duduWithDept.department.name)
        // console.log('test')
    }
    catch (err) {
        console.error(err);
        throw err;
    }
})()


