function loadDoc() {
  
	try
	{
  
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", "http://localhost:3000/getData", false);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send();
	
		if(response =="Error")
		{
		document.getElementById("error").innerHTML = "Error occured!";
		}
		else
		{
			var response = JSON.parse(xhttp.responseText);
			console.log(response);
			document.getElementById("Name").innerHTML = response["Name"];
			document.getElementById("Email").innerHTML = response["Email"];
		}
	}
	catch(err)
	{
  
		document.getElementById("contant").innerHTML = "";
		var hedding = document.createElement("h1");
		var node = document.createTextNode("Server not found!");
		hedding.appendChild(node);

		var element = document.getElementById("contant");
		element.appendChild(hedding);
  
  
	}
  
}