const emoplyee = require("./employee-router");
// const healthCheck = require("./healthcheck-router.js")


function defineRoutes(app) {
    emoplyee(app);
    // healthCheck(app);
}

module.exports = defineRoutes