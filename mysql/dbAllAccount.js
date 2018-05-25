const dbName='all_account';
const Sequelize = require('sequelize');
const dbMethod = require('./dbMethod');

var userAccount = dbMethod.sequelize.define(dbName,{
        account_id:{
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        balance: Sequelize.STRING(20),  //余额
        limit: Sequelize.STRING(20),    //额度
    },{
        timestamps: false,
        freezeTableName: true
    }
);

var selectAll=async()=>dbMethod.selectAll(userAccount);

var selectByCondition=async function(condition,value){
    return dbMethod.selectByCondition(userAccount,condition,value);
}

var addNew=async function(account_id,balance,limit){
    value={
        account_id: account_id,
        balance: balance,
        limit: limit,
    };
    return dbMethod.addNew(userAccount,value);
}



var dbOpen={
    selectAll: selectAll,
    selectByCondition: selectByCondition,
    addNew: addNew
};
module.exports=dbOpen;