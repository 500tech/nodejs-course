const http = require('http');
const employeeController = require("../controllers/employee.controller");

const server = http.createServer((req, res) => {
    if (req.url === '/employees') {
        employeeController.getEmployees(req, res);
    } else {
        res.statusCode = 404;
        res.end('404 not found');
    }
});


server.listen(8080, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Server is up 8080");

    }
});

// 1 == "1" //true
// 1 === "1" //false