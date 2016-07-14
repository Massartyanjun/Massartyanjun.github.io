$(document).ready(function(){


	$("input").focus(function(){
		$(this).css({"background-color":"#993300"
	});

	

	$("input").blur(function(){
		$(this).css({"background-color":"inherit"});



	$("#user-happy").click(function(){
		if($(this).is(":checked"))
		{
			$(this).remove();

			$(this).parent().text("B-)");
		}else{
			$("#similey").text("k-(");

		}

	});
		$("#user-contry").change(function(){
				alert($(this).val());
		});

		$("#form-submit").click(function(e){

			e.preventDefault();

			$("#name-result").text($("user-name").val());
			$("#email-result").text($("User-email").val());


			if($("#user-happy")).is(":checked"));
		{
			$("#happy-result").text("are");
		}else{

			$("#happy-result").text("aren't");

		}

		var countryVal = $("#user-country").val();
		var countryName = $("#user-country option[value='" + countryVal + "']").text()
		$("#country-result").text(countryName);
		});


});