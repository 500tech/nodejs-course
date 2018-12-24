const employeeService = require("../services/employee-service");
const request = require("request-promise");
async function getEmployees(req, res) {
    // if (req.url.indexOf('auth') >= 0) {

    try{
    const response = await request({ 
        uri:'http://localhost:8082/salary',
        method:'GET',
        headers:{
            'x-cellebrite-auth':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiTWljaGFlbCIsImlhdCI6MTU0NTY2MDM1NiwiZXhwIjoxNTQ2MjY1MTU2fQ.9g1-WyINGmw3cAWPH6k7eQj0-_-rwL_QulnYvx8IVzo"
        }
    })
    console.log(JSON.stringify(response));

} catch(e) {
    console.log("error: " + e);

}


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

function getEmployeeByStar(req, res) {

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
    Î
}

module.exports = {
    getEmployees,
    newEmployees,
    getEmployeeByName,
    getEmployeeByStar
}