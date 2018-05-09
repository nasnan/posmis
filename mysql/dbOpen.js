const dbName='open';
const Sequelize = require('sequelize');
const dbMethod = require('./dbMethod');

var userOpen = dbMethod.sequelize.define(dbName,{
        account_id:{
            type: Sequelize.INTEGER(11),
            primaryKey: true
        },
        bank_name: Sequelize.STRING(20),
        username: Sequelize.STRING(20),
        password: Sequelize.STRING(6),
        money: Sequelize.INTEGER(11)
    },{
        timestamps: false,
        freezeTableName: true
    }
);

var selectAll=dbMethod.selectAll(userOpen);

