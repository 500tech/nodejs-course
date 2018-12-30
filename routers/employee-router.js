const employeeController = require("../controllers/employee.controller");
const authMiddleware = require("../middleware/auth.middleware");

function defineRoutes(app) {
    app.get('/employees',authMiddleware, employeeController.getEmployees)
    app.post('/employee', employeeController.newEmployees)
    app.get('/employee/preview', authMiddleware,employeeController.preview )
    app.get('/employee/*',authMiddleware, employeeController.getEmployeeByStar)
    app.get('/employee/:name',authMiddleware, employeeController.getEmployeeByName)

}

module.exports = defineRoutes