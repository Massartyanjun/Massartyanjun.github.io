			$(document).ready(function(){
				$("#img1").mousedown(function(){$(".background").css("background-color","green");});
				$("#img1").mousedown(function(){$(".paragraph").css("color","white");});
				$("#img2").mousedown(function(){$(".background").css("background-color","red");});
				$("#img2").mousedown(function(){$(".paragraph2").css("color","black");});
				$("#img3").mousedown(function(){$(".background").css("background-color","orange");});

				$("#form-submit").click(function(){$("#name-result").text(
					$("#user-name").val()
					);});
				$("#form-submit").click(function(){$("#email-result").text(
					$("#user-email").val()
					);});

				$("#img5").click(function(){$("#audioplayer1").get(0).play()});
			

				


				$(document).ready(function() {
    			$('#button').click(function() {
        		$('div').each(function() {
            	$(this).css('background',randomColor())
        		});
    			});
				});

				
			});
			$(document).mousedown(function () {
    			if (window.mousedown > 50) {
        			$(".header-wrap").stop().animate({
            			fontSize: '100px'
       		 		});
    			} else {
        			$(".header-wrap").stop().animate({
            			fontSize: '80px'
        			});
   		 		}
			});