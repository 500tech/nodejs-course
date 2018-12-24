const Op = Sequelize.Op;

employee.findAll({
    attributes: ['firstname', 'lastname']
});


// select age, country as c ....
employee.findAll({
    attributes: ['age', ['country', 'c']]
});

employee.findAll({
    attributes: [[sequelize.fn('COUNT', sequelize.col('*'))]]
});


employee.findAll({
    where: {
        age: 21
    }
})

employee.findOne({
    where: {
        age: 21
    }
})

employee.findAll({
    where: {
        [Op.or]: [{ age: 12 }, { age: 13 }]
    }
})



employee.findAll({
    where: {
        age: {
            [Op.or]: {
                [Op.gt]: 10, //gte  
                [Op.lt]: 20 // lte
            }
        }
    }
})


employee.destory({
    where: {
        age: 21
    }
})


employee.update({ adult: true }, { where: { [Op.gte]: 18 } })