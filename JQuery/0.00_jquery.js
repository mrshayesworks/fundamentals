$(document).ready(function(){
alert("JQUERY is here!")

	$('#hide').click(function(){
		$("#image").hide();
	});
		$('#show').click(function(){
		$("#image").show();
	});
		$('#fadeIn').click(function(){
		$("#image").fadeIn(2000);
	});
		$('#explode').click(function(){
		$("#image").hide("explode",{pieces: 150}, 5000);
	});
		$("#slideup").click(function(){
  		$("#image").slideup();
	});


});