const employeeService = require("../services/employee-service");

function getEmployees(req, res) {
    // if (req.url.indexOf('auth') >= 0) {
        employeeService.getAllEmployees()
            .then((data)=>{
                console.log(data);

                res.statusCode = 200;
                res.end(data);
            })
            .catch((err) => {
                console.error(err);
                
                res.statusCode = 500;
                res.end('Error');
            })

    // } else {
    //     res.statusCode = 401;
    //     res.end('Go away');
    // }
    console.log();

}

module.exports = {
    getEmployees
}