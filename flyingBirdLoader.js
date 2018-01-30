$(document).ready(function(){
	//console.log(typeof bird_loader_img_standing+" : bird_loader_img_standing == bird_loader_img_fly : "+bird_loader_img_fly);
	//console.log("flying bird loader has been active..")
});
//to load the element
function addLoader(animation_delay, aftr_fly_brd_top_pos, aftr_fly_brd_left_pos, brd_height, brd_width){
	var bird_height = "";
	var bird_width = "";
	var bird_animation = ""; 
	var bird_top_position = ""; 
	var bird_left_position = ""; 
	var fly_bird_img = "";
	
	if(typeof brd_height == "number" && typeof brd_width == "number"){
		bird_height = brd_height;
		bird_width = brd_width;
	}else{
		bird_height = 66;
		bird_width = 85;
	}
	
	if(bird_loader_img_fly !== ""){
		fly_bird_img = bird_loader_img_fly;
		//console.log("fly_bird_img ***** : "+fly_bird_img);
	}else{
		fly_bird_img = '../js/flying_bird_loader/img/flying_bird.gif';
		//console.log("fly_bird_img -1 ***** : "+fly_bird_img);
	}
	
	
	//console.log(" bird_loader_img_fly !== "+(bird_loader_img_fly !== "")+ " == " + (typeof bird_loader_img_fly !== undefined)+" == "+ (typeof bird_loader_img_fly !== "undefined")+" == "+ (bird_loader_img_fly !== null));
	
	//console.log(" bird_loader_img_fly !== "+(bird_loader_img_standing !== "")+ " == " + (typeof bird_loader_img_standing !== undefined)+" == "+ (typeof bird_loader_img_standing !== "undefined")+" == "+ (bird_loader_img_standing !== null));

	if(bird_loader_img_standing !== ""){
		standing_bird_img = bird_loader_img_standing;
		//console.log("standing_bird_img ***** : "+standing_bird_img);
	}else{
		standing_bird_img = '../js/flying_bird_loader/img/standing_brd.jpg';
		//console.log("standing_bird_img -1 ***** : "+standing_bird_img);
	}
	
	
	
	if(typeof aftr_fly_brd_top_pos == "number" || typeof aftr_fly_brd_left_pos == "number" || typeof brd_height == "number" || typeof brd_width == "number"){
		bird_animation = ""+animation_delay+"s"; 
		bird_top_position = ""+aftr_fly_brd_top_pos+"%"; 
		bird_left_position = ""+aftr_fly_brd_left_pos+"%";
	}else{
		console.log("Not yet defined");
	}
	//console.log(bird_height + " : bird_height == bird_width : "+bird_width);
	var custum_html = 
		"<img class='flying_brd' src='"+fly_bird_img+"' height='"+bird_height+"' width='"+bird_width+"'>"+
		"<img id='standin_brd' class='stndng_brd'"+ 
			"src='"+standing_bird_img+"' alt='bird_images' height='"+bird_height+"' width='"+bird_width+"'>"+	
			/*"<img id='standin_brd' class='stndng_brd'"+ 
			"src='"+standing_bird_img+"' alt='bird_images' height='"+bird_height+"' width='"+bird_width+"'"+
			"onClick='CallLoaderFunction()'>"+	*/					
		"<img class='after_fly_brd'"+
			"src='"+standing_bird_img+"' style='' alt='branch_stnd_brd' height='"+bird_height+"' width='"+bird_width+"'>";
		
	//console.log(typeof (brd_height)+" : typeof brd_height == custum_html : "+custum_html);
	$("#loaderElement").html(custum_html);
	
	$(".flying_brd").css({"object-fit":"cover","border-radius":"35px","max-width":"max-content",
						"position":"fixed","bottom":"-3%","left":"-1%",
						"animation-name":"example","animation-duration":"15s",
						"object-fit":"cover",'animation-duration':bird_animation});
	//debugger;					
	/* $("img.after_fly_brd").css({"top":bird_animation,"position":"fixed","left":bird_left_position,"z-index":"-1"}); */
	$('.after_fly_brd').css({"object-fit":"cover",'position':'fixed','top':bird_top_position,'left':bird_left_position,'z-index':'-1'});
	
	$(".stndng_brd").css({"object-fit":"cover","border-radius":"35px","position":"fixed","left":"0%","bottom":"-2.5%"});
	
	//$('.flying_brd').css({"object-fit":"cover",'animation-duration':bird_animation,'animation-name':'example'});
	//$('.flying_brd').css({'animation-name':'example','animation-duration':'"'+bird_animation+'"'});
	/* $(".flying_brd").css({"animation-name":"example","animation-duration":bird_animation}); */
		
	$(".flying_brd").hide();
	$(".after_fly_brd").hide();
	
	console.log("Plugin has been loaded successfully");
	
}

//to call the click event for the bird, to fly the bird
function CallLoaderFunction(){
	flyTheBird(13000, 1000);
	//console.log("called flyTheBird");
}

//Bird fly functions
function flyTheBird(time_out, bird_movement_interval){
	
	$(".after_fly_brd").hide();
	$("#standin_brd").hide();
	//$(".flyingBrd").show();
	$(".flying_brd").show();
	setTimeout(function(){
		$("#standin_brd").hide();
		$(".after_fly_brd").show();
		//$(".flyingBrd").hide();
		$(".flying_brd").hide();
		bird_movement(bird_movement_interval);
	},time_out);
}

//after success fly, make the bird sit.
function bird_movement(bird_movement_interval){
	var count = 0;
	setInterval(function(){
		if(count%2 == 0){
			$(".after_fly_brd").css({"transform":"rotateY(150deg)"});
		}else{
			$(".after_fly_brd").css({"transform":"rotateY(0deg)"});
		}		
		count++;
	},bird_movement_interval)
	
}
	
