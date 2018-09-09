function updateCount(){
	var $count = $('#count');
	var score = parseInt($count.text())+1;
  //console.log(score);
	$count.text(score);	 
}

function setEndScore(score){
	var score = score || 0;
	//console.log(score);
	$('.end-score').hide().delay(300).fadeIn(500);
	$('.end-score-text').text(score);
}

function changeWord(){
  var textArr = ['apple','script','text','phone','media','index','delete','share','export','collections','monday','game','options',
  'imagine','dynamic','title','jump','flowers','smoke','meal','profit','settings','tremble','important','morning','argument','depressed',
  'boy','fool','calculating','dependent','abortive','watch','lovely','matter','grateful','chance','concentrate','receptive','general'];
  var index = Math.floor((Math.random() * textArr.length));
  $('#word').text(textArr[index]);
}

$(function() {
  
	var word, $input, inputText;
	word = $('#word');
  //console.log(word.text());
  $input = $('#main-input');
  //console.log($input.val());
  $("#logo").hide().delay(500).fadeIn(500);
  $('.game-composition').hide().delay(1000).slideDown(800);

  $(document).one('keydown', 'input:text', function(){
      var countDownDate = new Date().getTime()+60000;

		// Update the count down every 1 second
		var x = setInterval(function() {

	    // Get todays date and time
	    var now = new Date().getTime();
	    
	    // Find the distance between now and the count down date
	    var distance = countDownDate - now;
	    
	    // Time calculations for days, hours, minutes and seconds
	    
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	    // Output the result in an element with id="demo"
	    document.getElementById("clock").textContent = "Time: " + seconds + "s ";
	    
	    // If the count down is over, write some text 
	    if (distance < 0) {
	        clearInterval(x);
	        document.getElementById("clock").textContent = "Time over";
	        setEndScore($('#count').text());
	    }
	}, 1000);
  });
  
  $('#btnReload').on('click',function(){
  	location.reload();
  });

	$(document).on('input', 'input:text', function(){ 
    		if($(this).val().toLowerCase() == word.text()){
           //console.log("eaa bitch");
            $(this).val('');
  	       updateCount();
           changeWord();
    }
	});
	// Custom JS

});
