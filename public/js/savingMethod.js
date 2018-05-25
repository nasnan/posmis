// const numberAuthenticate=require('/common/numberAuthenticate');


//卡号和金额只能数字
$("#sumMoney").keyup(function(event){
	this.value=this.value.replace(/[^((\d))]/,'');
});
$("#accountId").keyup(function(event){
	this.value=this.value.replace(/[^((\d))]/,'');
});


$("#submitBtn").click(function (event) {
	event.preventDefault();
	var accountId=$("#accountId");
	var accountIdVal=accountId.val();
	var sumMoney=$("#sumMoney");
	var sumMoneyVal=sumMoney.val();
	var error=$(".error").eq(0);

	//卡号认证
	var accountLen=accountIdVal.length;
	if(accountIdVal!=10){
		error.text("卡号为10位数！").show();
		accountId.focus();
		return false;
	}

	$.ajax({
		type: 'POST',
		url: '/home/saving',
		dataType: 'json',
		data: {
			accountId: accountIdVal,
			sumMoney: sumMoneyVal
		},
		success: function(data){

		},
		error: function(data){
			
		}
	})




})