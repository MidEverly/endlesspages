document.getElementById('save').addEventListener("click", function() { 
	var username = document.querySelector('input[type="text"]').value;
	localStorage.setItem("username", username);
	console.log(localStorage.getItem("username"));
	var passcode = document.querySelector('input[type="password"]').value; 
	localStorage.setItem("password", passcode); 
	console.log(localStorage.getItem("password"));
	var email = document.querySelector('input[type="email"]').value 
	localStorage.setItem("email", email); 
	var bio = document.querySelector('textarea').value; 
	localStorage.setItem("biography", bio);
	console.log(localStorage.getItem("biography"));
	var website = document.querySelector('input[type="link"]').value;
	localStorage.setItem("site", website);
	console.log(localStorage.getItem("site"));
} 
) 

document.getElementById('cancel').addEventListener("click", function() { 
	location.assign('homepage.html'); 
} 
) 