const Sequelize = require('sequelize');
const config = require('../../conf/config');
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

var user = sequelize.define('open',{
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
});



var selectAll=async function(){
  let users = await user.findAll();
  let ans={"ans":[]};
  for (let u of users){
    ans['ans'].push(JSON.stringify(u));
  }
  return ans;
}

module.exports = selectAll;


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