function check_name(name){
	if( name == "gabriel"){
		return "Win !";
	}else if( name == "Clement"){
		return "We find Clement !";
	}else{
		var res = "Truth ! "+ name + " is different from gabriel and Clement !";
		return res;
	}
}

$(document).ready(function(){
	alert(check_name("gabriel"));
	$("div").html("<span class='red'>Hello <b>Again</b></span>");
	$("h1").html("Arnaud D.").click(function(){
		$(".line").remove()
	});
});