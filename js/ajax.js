/* Ajax POST and GET methods*/

async function GetData(url){
	console.log(url);
	var ListOfPlayers = await $.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		success: function(data){
			ListOfPlayers = data;
			console.log(data); //object
			//return ListOfPlayers;
		},
		fail: function(data){
			ListOfPlayers = "error";
			//return ListOfPlayers;
		}
	});
	console.log(ListOfPlayers); //undefined
	return ListOfPlayers;
}

function Player(name, score, date){
	this.name = name;
	this.score = score;
	this.date = date;
}

function PostData(url, name, score){
	var today = new Date().getTime();
	var newPlayer = new Player(name, score, today);

	$.ajax({
		type: "POST",
		url: url,
		dataType: "json",
		data: JSON.stringify(newPlayer),
		contentType: "application/json",
		success: function(data){
			console.log("success post: " + data);
		},
		fail: function(data){
			console.log("fail post: " + data);
		}
	});
}