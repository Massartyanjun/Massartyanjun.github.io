			$(document).ready(function(){
				

				var safeColors = ['00','33','66','99','cc','ff'];
				var rand = function() {
    			return Math.floor(Math.random()*6);
				};
				var randomColor = function() {
   			 	var r = safeColors[rand()];
    			var g = safeColors[rand()];
    			var b = safeColors[rand()];
    			return "#"+r+g+b;
				};


				
    			$('#button').click(function() {
        		$('div').each(function() {
            	$(this).css('background',randomColor());
        		});
    		});
		});

				
			