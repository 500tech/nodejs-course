const employeeService = require("../services/employee-service");

function getEmployees(req, res) {
    // if (req.url.indexOf('auth') >= 0) {
    employeeService.getAllEmployees()
        .then((data) => {
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


function newEmployees(req, res) {
    console.log(JSON.stringify(req.body));
    res.sendStatus(200)
}

function getEmployeeByName(req, res) {

    if (req.params.name) {
        employeeService.getAllEmployees()
            .then((emps) => {
                const employees = JSON.parse(emps);
                const filter = employees.filter((emp) => {
                    return emp.name === req.params.name;
                })

                res.status(200).json({ employees: filter })

            }).catch((err) => {
                res.status(500).json({ reason: err })
            })
    } else {
        res.status(400).json({ reason: 'No name...' })
    }
}

module.exports = {
    getEmployees,
    newEmployees,
    getEmployeeByName
}