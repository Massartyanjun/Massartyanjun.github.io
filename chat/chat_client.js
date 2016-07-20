$(document).ready(function(){

	var socket = io("http://localhost:3000");
	$.ajax({
		url: "http://localhost:3000/get_archive",
		success: function(data){ //past the data
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





	$("#chat-form").submit(function(){
		var messageObject = {};
		messageObject.username = $("#chat-name").val();
		messageObject.text = $("#chat-input").val();
		
		socket.emit("chat message", messageObject);
		$("#chat-input").val("");
		return false;

	});

	socket.on('chat message', function(msg){
		if(msg.username == $("#chat-name").val())
		{
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.username +"</b>:" + msg.text + "</li>");
		}else{
			$("#chat-log ul").append("<li class='them-line'><b>" + msg.username + "</b>: " + msg.text + "</li>"); // log the check. add the ul. list the message. message object.
		}
	});


});