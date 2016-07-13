




$(document).ready(function(){
	
	$("#text-content").fadeOut();
	
	setTimeout(function(){
		$("#text-content").text("Background");
	}, 400);
	
	$("#text-content").fadeIn();
	
	$("#Thelittlegirl").mouseenter(function(){$(this).css("border","solid 2px #990000");});

	$("#Thelittlegirl").mouseleave(function(){
 	$(this).css("border", "none");
 	});

});

	