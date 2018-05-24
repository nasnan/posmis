const Sequelize = require('sequelize');
const config = require('../conf/config');
const sequelize = new Sequelize(config.database, config.username, config.password,{
    host: config.host,
    dialect: 'mysql',
    operatorAliases: false,

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})



//从表dbusername中返回所有记录
var selectAll=async function(dbusername){
    let users = await dbusername.findAll();
    let ans={"ans":[]};
    for (let u of users){
        ans['ans'].push(JSON.stringify(u));
    }
    return ans;
}


//从表dbusername中返回condition为value的记录
var selectByCondition=async function(dbusername,condition,value){
    let key=condition;
    var users = await dbusername.findAll({
        where:{
            [key]:value,
        }
    });
    let ans={"ans":[]};
    for (let u of users){
        ans['ans']=(JSON.stringify(u));
    }
    return ans;
}

var addNew=async function (dbname,value) {
    let ans={};
    return dbname.create(value).then((p)=>{
        ans['status']=0;
        return ans;
    }).catch((err)=>{
        console.log(err,'err');
        ans['status']=1;
        ans['err']=err;
        return ans;
    });
}

var dbMethod={
    sequelize: sequelize,
    selectAll: selectAll,
    selectByCondition: selectByCondition,
    addNew: addNew
};
module.exports=dbMethod;

// var 

// (async()=>{
//   var users = await user.findAll({
//     where:{
//       bank_name:'ICBC',
//     }
//   });
//   console.log(`find ${users.length} pets:`);
//   for (let u of users){
//     console.log(JSON.stringify(u));
//   }
// })();