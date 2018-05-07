var searchBtn=$("#search");


searchBtn.click(()=>{
	$.get('/posmis',function(data,status){
		if(status){
			console.log(data);
		}
	})
})

