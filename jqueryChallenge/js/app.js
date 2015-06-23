//$('h1').html('Goodbye, World');
//$('#err-msg').html('<p>Your Credit Card has been declined </p>');

$('#box1').css('background','green');

$('#para1').css('font-weight','bold');
$('#para1').css('font-size','22px');

//$('#box2').onClick('background','green');



$('.box2').hover(function(){
		$('.box2').addClass('spin');
	},
	function(){	
		$('.box2').removeClass('spin');
	});



$( "#button1" ).click(function() {
   alert( "Good job!" );
});


$( "#box3" ).hover(function() {
  $( "#box3" ).css( 'background-color','green');
	},
    function(){
	$( "#box3" ).css( 'background-color','red');
	});

$('#input1').keyup(function(){
	console.log($('#input1').val());
})


$('#box4').animate({'top':'+=150','left':'+=400'},2000,function(){});