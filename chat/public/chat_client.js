$(document).ready(function(){

	var socket = io();
	$("#chat-start").click(function(){
		$.ajax({
		url: "get_archive",
		success: function(data){ //pass the data
			$("#chat-log ul li").remove();
			for (var i=0;i<data.length;i++)
			{

			var msg = data[i]; //set the data to the ...

			if(msg.username == $("#chat-name").val()) 
			{
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.username +"</b>:" + msg.text + "</li>");
			}else{
			$("#chat-log ul").append("<li class='them-line'><b>" + msg.username + "</b>: " + msg.text + "</li>"); // log the check. add the ul. list the message. message object.
			}
		}	
	}

	});
});


	$("#chat-form").submit(function(){
		var messageObject = {};
		messageObject.username = $("#chat-name").val();
		messageObject.text = $("#chat-input").val();
		
		socket.emit("chat message", messageObject);
		$("#chat-input").val("");
		return false;

	});

	

	  var valuePic;
	$("#emoji-box input").click(function(){
    console.log($(this).val());
    valuePic =$(this).val();
    });

	$("#emoji-box").submit(function(e){
    var emoObject ={};
    emoObject.link = $("#"+valuePic).attr("src");
    console.log(emoObject.link);
    //console.log($("#emoji-box").val() );
    socket.emit("emoji", emoObject);//refrencing io commend to the server, emit: send message
    $("#emoji-box input").attr("src");
    return false;// on flash

});//end of form




	socket.on('chat message', function(msg){
		if(msg.username == $("#chat-name").val())
		{
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
		}else{
			$("#chat-log ul").append("<li class='them-line'><b>" + msg.username + "</b>: " + msg.text + "</li>"); // log the check. add the ul. list the message. message object.
		}
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.text + "</b>:" + msg.text + "</li>");
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.text + "</b>:" + msg.text + "</li>");

	});

	socket.on('chat message', function(msg){
		var msgSize = msg.text.length/10;
		var msgSizeStyle = "font-size:"+msgSize+"px";
		console.log(msgSize);
		if(msg.username == $("#chat-name").val())
		{
			$("#chat-log ul").append("<li class='me-line'><b>" + msgSizeStyle +"</b>:" + msg.text + "</li>");
		}else{
			$("#chat-log ul").append("<li class='them-line'><b>" + msgSizeStyle+ "</b>: " + msg.text + "</li>"); 
		}
	});


});