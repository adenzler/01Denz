function check_name(name){
	if( name == "gabriel"){
		console.log("Win !");
	}else if( name == "Clement"){
		console.log("We find Clement !");
	}else{
		console.log("Truth !"+ name + " is different from gabriel and Clement !");
	}
}

$(document).ready(function(){
	check_name("gabriel");
});