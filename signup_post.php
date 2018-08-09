<html> 
<body> 
<div id='info'> 
<?php 
echo Welcome aboard 

?> 
<div id='button'> 
</div> 
</div> 
<script> 

var confirm = document.createElement("button"); 
confirm.innerHTML = 'Confirm';
document.getElementById('button').appendChild(confirm); 
confirm.onclick = function() { 
	location.assign('homepage.html'); 
} 
</script> 
</body> 
</html> 