var imageIndex = 0;
var images = ["pics/Desert.jpg", "pics/Jellyfish.jpg", "pics/Penguins.jpg"];

//Lesson 4: create external file and call a function
function changeH1(){
	
	//document.getElementById("demo").innerHTML = "Hello JavaScript";
	
	//use jQuery and select by the tag instead of the demo id
  $("h1").html("jQuery does it better!!");
};

//Lesson 5: is to create an input text box and getting data from it
function sayHello() {
	
	//Lesson 5: is to create an input text box and getting data from it
	//document.getElementById("firstname").value;
	//document.getElementById("lastname").value;
	
	//Lesson 9: re-write this function using jQuery selectors
	var firstName = $("#firstname").val(); 
	var lastName = $("#lastname").val(); 
	
	alert("Hello " + firstName + " " + lastName);
};

//Lesson 6: Control Structures (branches and loops) 
var loopByInput = function(){
	var loopNum = document.getElementById("loopNum").value;
	var number = parseInt(loopNum);

	if(!isNaN(number)){
		for(i=0; i<number;i++){
			document.getElementById("output").innerHTML += i + "<br/>";
		}
		
		//this is the do...while loop, different structure, but you can get the same effect
		/*
		i = 2;
		do{
			document.getElementById("output").innerHTML += i + "<br/>";
			i++;
		}while(i<number);
		*/
  }
	
	else document.getElementById("output").innerHTML = "The value " + loopNum + " is not a number <br/>";
};

//Lesson 7 is to update the style attribute
var changeText = function(){
	var element = document.getElementById("output");
  
  if(element.style.color == "red")element.style.color="blue";
  else element.style.color="red";
  
  console.log(element);
  
};

var hideOutput = function(){
  var element = document.getElementById("output");
  
  if(element.hidden == false){
    element.hidden=true;
    document.getElementById("hide").value = "Show Output";
  }
  else {
    element.hidden=false;
    document.getElementById("hide").value = "Hide Output";
  }
};

//Lesson 8 is adding elements to the DOM
var addImage = function(){
  var element =document.createElement("img");
  
  //the % is the modulus operator and it will return the remainder from the operation
  element.src = images[imageIndex % 3];
  element.style.height = '200px';
  element.style.width = '200px';
  document.getElementById("body").appendChild(element);
  
  //Lesson 10: this is jquery code that does the same thing as the above straight JavaScript code
  var img = $("<img>");
  img.attr('src',images[imageIndex % 3]);
  img.attr('style', 'height:200px;width:200px;');
  $('body').append(img);
  
  //increment the imageIndex so next time the function is called a different 
  imageIndex += 1 ;
 
}
//
$("document").ready(function(){

	// Lesson 11: Ajax stands for Asynchronous JavaScript and XML. It allows the program to submit a request to the server without submitting (
	// and reloading) the page handy for updating data sections, loading choices on the fly 
    $.ajax({
      type: 'GET',
      url: 'http://www.shannonwhalen.com/demo.php',
      dataType: 'jsonp',
	  // the success function processes the data received in the HTTP Response
      success:function(data, status, request){
        
		//for each object returned in the data array, create a checkbox
		$.each(data, function(index, value){
          $('<input />', { type: 'checkbox', id: 'cb' + index }).appendTo("body");
          $('<label />', { 'for': 'cb'+index, text: value }).appendTo("body").css("margin-right", "10px");
       
        });
		
		$('<br/><br/>').appendTo("body");
      }
    });
});
