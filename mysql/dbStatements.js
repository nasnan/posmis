const dbName='statements';
const Sequelize = require('sequelize');
const dbMethod = require('./dbMethod');

var userStatements = dbMethod.sequelize.define(dbName,{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        from: Sequelize.BIGINT,     //操作的卡号
        money: Sequelize.STRING(20),  //操作的金额
        to: Sequelize.STRING(20),    //去向卡号（如果有）
    },{
        timestamps: false,
        freezeTableName: true
    }
);

var selectAll=async()=>dbMethod.selectAll(userStatements);

var selectByCondition=async function(condition,value){
    return dbMethod.selectByCondition(userStatements,condition,value);
}

var addNew=async function(from,money,to){
    value={
        from: from,
        money: money,
        to: to,
    };
    return dbMethod.addNew(userStatements,value);
}



var dbStatements={
    selectAll: selectAll,
    selectByCondition: selectByCondition,
    addNew: addNew
};
module.exports=dbStatements;