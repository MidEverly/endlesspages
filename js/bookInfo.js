function expand() { 
	document.getElementById('info').style.height = '100%';
} 
var title = 'Beneath The Moonlight' 
localStorage.setItem('title', title);
var author = 'InTheEndlessMidnight' 
localStorage.setItem('author', author) 
function showInfo() { 
	var title = localStorage.getItem('title', title);
	document.getElementById('title').innerHTML = title; 
	var author = localStorage.getItem('author', author) 
	document.getElementById('author').innerHTML = author
} 

expand() 

showInfo() 