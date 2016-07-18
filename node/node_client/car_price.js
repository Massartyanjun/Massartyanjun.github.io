$(document).ready(function(){

	$("#totally"). click(function(e){
		e.preventDefault();

        $.ajax({
            url: "http://localhost:3000/set_price",
            type: "GET",
            data: {
                price: $('#car-price').val(),
                color: $('#car-color').val()
                size: $('#car-size').val()

            }
          });
    });
});