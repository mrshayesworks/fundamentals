// document.onload(alert('Hey Hey Hey!!'));
// //console.log('Look at me, I am working');

var hobbiesList = document.getElementsByClassName('hobby');
console.log(hobbies);

var hobbies = document.getElementById('hobby-list');
console.log(hobbiesList[0].innerHTML);

var music = document.getElementById("music");


function favoriteSong() {
	document.getElementById('best').innerHTML = "Freebird!!";
}

favoriteSong();

function worstSong() {
	document.getElementById('worst').innerHTML = "most rap out now";
}

worstSong();

function favoriteSong() {
	document.getElementById('best rock').innerHTML = "Bohemian Rhapsody";
}

favoriteSong();
