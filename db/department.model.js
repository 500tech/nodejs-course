const Sequelize = require('sequelize');

function defineModel(sequelize) {
    return sequelize.define('department', {
        name: Sequelize.STRING,
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    });
}

module.exports = defineModel;
































