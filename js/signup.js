function save() { 
	var name = document.querySelector('input[type="text"]').value;
	var email = document.querySelector('input[type="email"]').value;
	var pass = document.querySelector('input[type="password"]').value; 
	var details = name + email + pass 
	console.log(details) 
	localStorage.setItem('name', name) 
	localStorage.setItem('email', email) 
	localStorage.setItem('pass', pass) 
} 