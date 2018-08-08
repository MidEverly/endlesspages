var username = []; 
username.push('EndlesslyMidnight');
console.log(username);
var bio = []; 
bio.push('Welcome to EndlessPages!');
console.log(bio);
var email = []; 
email.push('victoriquecrawford@gmail.com');


function enterInfo() { 
	for (i =0; i < username.length; i++) { 
	document.getElementById('username').innerHTML = username[i];  
	} 
	for (i = 0; i < bio.length; i++) { 
	document.getElementById('bio').innerHTML = bio[i]; 
	} 
	for (i =0; i < email.length; i++) {
		email[i].slice(1,-1) 
	var linked = JSON.stringify(email[i]); 
	var mail = document.createElement("a");
	var mailing = document.createTextNode(linked);
	mail.appendChild(mailing);
	mail.setAttribute('href', 'mailto:victoriquecrawford@gmail.com'); 
	document.getElementById('email').appendChild(mail);
	} 
} 

enterInfo(); 

function edit() { 
	window.href('edit.html'); 
} 