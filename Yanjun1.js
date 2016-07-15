			$(document).ready(function(){
				$("#next-color").click(function(){
					//rgb(0-255,0-255,0-255)
			
				

				
				var randomRed= generateRandomeColor();
				var randomGreen= generateRandomeColor();
				var randomBlue= grnerateRandomeColor();

				var randomeColor = "rgb(" + randomeRed + "," + randomeGreen +"," + randomeBlue +")";
				$("#rhyme").css({"background-color":randomColor});
			});
		});
		
		function generateRandomeColor()
		{
			return Math,round(math.randome() * 255);
		}
			
		return;

		var n = 0; // hold the place for a number,make it egual zero at the first

		$(document).ready(function(){
		for(var i=0;i<10;i++) // start the zero, go until ten
		{
		$("#container").append("<div class='block'></block>");
		var block = $(".block").last();//holding a place. Make it equal to the most recently added block
		moveBlockRight(block)// call the "move the block right" function and pass the most recently block
		concole. log("move the block");
		}// closing the for loop
	}); //closing the ready event function

	function moveBlockRight(block)
	{
	n++;100% 
	// take the most recently added block.
	// Make it visibe (over a half second).
	// wait for a second per block count.
	// move it right 500px;
	block.fadeIn(500).delay(1000*n).animate({"left":"500px"});
	}