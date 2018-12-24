const Sequelize = require('sequelize');

let models = {};
function initDB() {
    const sequelize = new Sequelize('michaelhaberman', 'michaelhaberman', '', {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            // The maximum time, in milliseconds, that pool will try to get connection before throwing error
            acquire: 30000,
            idle: 10000
        },
    });
    models.employee = require('./employee.model')(sequelize);
    models.department = require('./department.model')(sequelize);

    defineRelations();

    return sequelize.sync({ force: true })
}

function defineRelations() {
    models.employee.belongsTo(models.department);
    models.department.hasMany(models.employee);
}

module.exports = {
    initDB,
    models
}