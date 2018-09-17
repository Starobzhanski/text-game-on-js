function updateCount(){
	var $count = $('#count');
	var score = parseInt($count.text())+1;
  //console.log(score);
	$count.text(score);	 
}

function setEndScore(score, speed){
	var score = score || 0;
	$('.end-score').hide().delay(300).fadeIn(500);
	$('.end-score-text').text(score);
	$('.end-score-text').after(`<p><span id="speed">${speed}</span> symbols in a minute</p>`);
}

function changeWord(){
  var textArr = ['apple','script','text','phone','media','index','delete','share','export','collections','monday','game','options',
  'imagine','dynamic','title','jump','flowers','smoke','meal','profit','settings','tremble','important','morning','argument','depressed',
  'boy','fool','calculating','dependent','abortive','watch','lovely','matter','grateful','chance','concentrate','receptive','general'];
  var index = Math.floor((Math.random() * textArr.length));
  $('#word').text(textArr[index]);
}

function fillTable(data){
	console.log("data",data);
	$table = $('#table');
	$table.hide().delay(300).html("<tr><th id=\"number\">N</th><th id=\"name\">Name</th><th id=\"score\">Score</th></tr>").fadeIn(700);
	for(let i =0; i<data.length; i++){
		let $newItem = $(`<tr><td>${i+1}</td><td>${data[i].name}</td><td>${data.length - data[i].id}</td></tr>`);
		$table.append($newItem);
	}

}


$(function() {
  
	var word, $input, inputText;
	word = $('#word');
  $input = $('#main-input');
  var speed = 0;

  $("#logo").delay(500).fadeIn(500);
  $('.game-start').delay(1000).slideDown(800);

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
	        setEndScore($('#count').text(),speed);
	        console.log(speed);
	    }
	}, 1000);
  });
  
  $('#btnReload').on('click',function(){
  	location.reload();
  });

  $("#toggle").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
	});

	$(document).on('input', 'input:text', function(){ 
    		if($(this).val().toLowerCase().trim() == word.text()){
           //console.log("eaa bitch");
          speed += $(this).val().trim().length;
          console.log(speed);
          $(this).val('');
          

  	      updateCount();
          changeWord();
    }
	});

	

	if(document.getElementById('table')){
		console.log("error get method");
		var List = GetData("https://jsonplaceholder.typicode.com/comments");
		List.then(function(response) {
    fillTable(response);  //функція що буде добавляти таблицю
  	});
	}

	//console.log('kek',kek);
});
