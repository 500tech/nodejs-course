const Sequelize = require('sequelize');

function defineModel(sequelize) {
    return sequelize.define('employee', {
        name: Sequelize.STRING,
        country: { type: Sequelize.STRING, defaultValue: 'Israel' },
        age: Sequelize.INTEGER,
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    });
}

module.exports = defineModel;


































/*
unique: true
allowNull: false
get() {
    const title = this.getDataValue('title');
    // 'this' allows you to access attributes of the instance
    return this.getDataValue('name') + ' (' + title + ')';
    }

set(val) {
    this.setDataValue('title', val.toUpperCase());
}

 validate: {
      is: ["^[a-z]+$",'i'],     // will only allow letters
      not: ["[a-z]",'i'],       // will not allow letters
      isEmail: true,            // checks for email format (foo@bar.com)
      contains: 'foo',          // force specific substrings
      notIn: [['foo', 'bar']],  // check the value is not one of these
      isIn: [['foo', 'bar']],   // check the value is one of these
      notContains: 'bar',       // don't allow specific substrings
      len: [2,10],              // only allow values with length between 2 and 10
      isAfter: "2011-11-05",    // only allow date strings after a specific date
      isBefore: "2011-11-05",   // only allow date strings before a specific date
      max: 23,                  // only allow values <= 23
      min: 23,                  // only allow values >= 23
      isEven(value) {
        if (parseInt(value) % 2 != 0) {
          throw new Error('Only even values are allowed!')
          // we also are in the model's context here, so this.otherField
          // would get the value of otherField if it existed
        }
      }
    }
*/