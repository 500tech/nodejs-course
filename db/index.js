const Sequelize = require('sequelize');

let models = {};
function initDB() {
    const sequelize = new Sequelize('michaelhaberman', 'michaelhaberman', '', {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });
    models.employee = require('./employee.model')(sequelize);
    return  sequelize.sync()
}
module.exports = {
    initDB,
    models
}