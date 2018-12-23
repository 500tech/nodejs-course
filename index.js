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

app.listen(8080, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Server is up: 8080');

    }
})
