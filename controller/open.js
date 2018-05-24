
const dbOpen=require('../mysql/dbOpen');


exports.open=async (ctx,next)=>{
	let body=ctx.request.body;
	let accound_id=await getAccount(tenRand());
	accound_id=parseInt(accound_id);
	let data;
	
	//db open增加新纪录
	await dbOpen.addNew(accound_id,body.bank_name,body.username,body.password,body.money).then((res)=>{
		data=res;
	})
	if(data.status==0){
		ctx.body={
			status: 0
		}
	} else {
		ctx.body={
			status: 1,
			message: data.err
		}
	}
	
}



//随机生成十位数
function tenRand(){		
	var num="";
	for(let i=0;i<10;i++){
		num+=Math.floor(Math.random()*10);
	}
	return parseInt(num);
}

//生成不重复的卡号
async function getAccount(tenNum){
	let data;
	await dbOpen.selectByCondition('account_id',tenNum).then(function(res){
		data=res;
	});
	if(data['ans'].length==0) return tenNum;	//该卡号未被注册
	else{
		getAccount(tenNum+Math.floor(Math.random()*10));
	}
}