//Declaring variables

//"Been to"  room variabls
//bToCorridor = true - means player has been to Corridor

//Items and Variables
var eyesOpen = false;
var death = true;
var knife = false;




//Current Room
var currentRoom = "pit";

//Messages

var lookAroundPit = "<p>You look around the pit etc</P.>"
var awaken = "<p>You awaken but you dare not open your eyes. <br> You lay on your back bound about the chest.</p>"

var openEyes = "<p>Your eyes open into darkness.</p>"
var eyesClosed = "<p>You hear the sounds of dripping water echoing in the distance<br> your eyes remain tightly shut</p>"
var feelAround = "<p>The ground is cold and damp. It feels like rock.</P>"


//take text input from text field 
//trying to understand document.ready. this should run once the DOM is ready for JS code to execute
	
// $("#message_startgame").fadeIn(1500);
// $("#area_northwing").fadeIn(2500)

	$(document).ready(function(){




		$("#bg").fadeIn(3000);
		$("#area").fadeIn(4000);
		//$("#welcome").fadeIn(3000);
		$("#console").fadeIn(1000);
		$(awaken).insertBefore("#placeholder").hide().fadeIn(10000);
		
		// function deathFunction(){
		// 	document.getElementById("death").innerHTML="body {background-color: red;}"
		// }

		// var counter = 0
		// while(death = true && counter < 1){
		// 		deathFunction();
		// 		counter++;
		// 	}
		

		$("form").submit(function() {     //when the form is submitted
			var input = $("#command_line").val(); //takes value of text field assigns it to input variable

			

			if(eyesOpen){

			//HELP
				if (input == "help"){
					$("#message_help").insertBefore("#placeholder").fadeIn(1000);
				}

				//EXPLORE
				else if ((input == "look around") && currentRoom == "pit") {
					$(lookAroundPit).insertBefore("#placeholder").hide().fadeIn(1000);
				}

				//TAKE KNIFE
				else if ((input == "take knife" || input == "pick up knife" || input == "grab knife" || input == "get knife") && currentRoom == "pit") {
					$("<p> You pick up the knife.</p>").insertBefore("#placeholder").hide().fadeIn(1000);
					knife = true;
				}

				//DONT UNDERSTAND INPUT
				else {
					$("<p>I do not understand what you mean by " + input + "</p>").insertBefore("#placeholder").hide().fadeIn(500);
				}
			 
		
			} else if (input == "open eyes"){
				$(openEyes).insertBefore("#placeholder").hide().fadeIn(1000);
				eyesOpen = true;
			} else if(input =="feel around"){
				$(feelAround).insertBefore("#placeholder").hide().fadeIn(1000);
			} else {
				$(eyesClosed).insertBefore("#placeholder").hide().fadeIn(1000);
			}

			//scrolls to bottom and clears text input 
			$("#console").scrollTop($("#console")[0].scrollHeight);
			$("#command_line").val('');

		});
	});



//set up a counter. give p tags an id that increments and 


		




