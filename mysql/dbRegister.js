const dbName='register';
const Sequelize = require('sequelize');
const dbMethod = require('./dbMethod');

var userRegister = dbMethod.sequelize.define(dbName,{
	name:{
		type: Sequelize.STRING(20),
		primaryKey: true,
	},
	password: Sequelize.STRING(8)
	},{
        timestamps: false,
        freezeTableName: true
    }
)


var selectAll=async()=>dbMethod.selectAll(userRegister);

var selectByCondition=async function(condition,value){
	return dbMethod.selectByCondition(userRegister,condition,value);
}

var dbRegister={
	selectAll: selectAll,
	selectByCondition: selectByCondition
}

module.exports=dbRegister;