function changeH1(){
	document.getElementById("demo").innerHTML = "Hello JavaScript";
}

function sayHello() {
	
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	
	alert("Hello " + firstName + " " + lastName);
}

var loopByInput = function(){
        var loopNum = document.getElementById("loopNum").value
        var number = parseInt(loopNum);

	if(!isNaN(number)){
		
		for(i=0; i<number;i++){
			document.getElementById("output").innerHTML += i + "<br/>";
		}
		
	}
	
	else document.getElementById("output").innerHTML = "The value " + loopNum 
            + " is not a number <br/>";
}