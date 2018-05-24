const dbName='open';
const Sequelize = require('sequelize');
const dbMethod = require('./dbMethod');

var userOpen = dbMethod.sequelize.define(dbName,{
        account_id:{
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        bank_name: Sequelize.STRING(20),
        username: Sequelize.STRING(20),
        password: Sequelize.STRING(6),
        money: Sequelize.INTEGER
    },{
        timestamps: false,
        freezeTableName: true
    }
);

var selectAll=async()=>dbMethod.selectAll(userOpen);

var selectByCondition=async function(condition,value){
    return dbMethod.selectByCondition(userOpen,condition,value);
}

var addNew=async function(account_id,bank_name,username,password,money){
    value={
        account_id: account_id,
        bank_name: bank_name,
        username: username,
        password: password,
        money: money
    };
    return dbMethod.addNew(userOpen,value);
}



var dbOpen={
    selectAll: selectAll,
    selectByCondition: selectByCondition,
    addNew: addNew
};
module.exports=dbOpen;