var icon_img = 'https://kikijinqili.github.io/assets/mercedes/mercedesLogo.png'
var playAd = 0;
var bye = 0;
var sayBye// = setInterval(sayGoodbye, 600000);
var user_name = '';
var type_anim_on = 0;

var prescripted_questions = new Array();
var prescripted_mode = 0;
var cur_question_index = 0;
var bot_typing = 0;
var correct_answer='';


//bot-initiated dialogue
class Question {
	constructor(text, answers, next_questions, correct_answer_index) {
		this.text = text;
		this.answers = answers;
		this.next_questions = next_questions;
		this.correct_answer_index = correct_answer_index;
	}
}

function createQuestions() {

	prescripted_questions[0] = new Question(['How are you today?'], ['I\'m doing well.', 'I\'m okay.','I could be better.'], 1, 1)
	prescripted_questions[1] = new Question(['Okay. How can I be of service?'], ['Shop Vehicles', 'Learn About Mercedes-Benz','Account Problem', 'Other Inquiries'], 2, 1)
	prescripted_questions[2] = new Question(["Sounds good. For nearly a century, Mercedes-Benz has made it our mission to move the world. With offices in 93 locations worldwide and a corporate headquarters in Stuttgart, Germany, our global presence continues to grow."], [""], 3, 0);
	prescripted_questions[3] = new Question(["How else can I be of service?"], ['Shop Vehicles', 'Learn About Mercedes-Benz','Account Problem', 'Other Inquiries'], 4, 0);
	prescripted_questions[4] = new Question(["What are you looking for today?"], ['SUVs', 'Sedans', 'Coupes', 'Convertibles', 'Hybrids'], 5, 4);
	prescripted_questions[5] = new Question([ "I recommend our EQ models, which are fully electric vehicles powered by a Lithium-ion battery. Our EQ models are a beautifully seamless blend of luxury and science. Are you interested in learning more about our EQ models?"], ['Yes', 'No'], 6, 0);
	prescripted_questions[6] = new Question(["Great. What specifically do you want to know?"],['Electricity as Luxury', 'Refined Performance', 'Cutting-Edge Styling'], 7, 1);
	prescripted_questions[7] = new Question(["Our electric drive system offers instant power to the wheels with no lag time for the powerful promise of greater acceleration and superior torque. The new 2019 Mercedes-Benz S 560e features a larger battery, a 7.2-kilowatt on-board charger, and more power."], [""], 8, 0);
	prescripted_questions[8] = new Question(["Select one of the following to learn more:"], ['Electircity as Luxury', 'Our Cutting-Edge Styling', 'Explore Other Vehicle Models', 'Additional Options'], 9, 3);
	prescripted_questions[9] = new Question(["Great. How would you like to proceed?"], ['I would like to learn more about your eco-conscious hybrids.', 'I would like to explore a different model.'], 10, 0);
	prescripted_questions[10] = new Question(["Please select one of the following to proceed:"], ['Our Cutting-Edge Styling', 'A Cross-Country Electric Landscape', 'In-Home Charging Solutions', 'Explore Other Vehicle Models'], 11, 2);
	prescripted_questions[11] = new Question(["We offer an in-home charging solution because there’s no better place to charge your vehicle than in the comfort of your own home. Our team will install a new-generation wallbox right in your home so that you can charge overnight and be ready to hit the road at a moment’s notice."], [""], 12, 0);
	prescripted_questions[12] = new Question(["What else do you like to know?"], ['Shop Our Hybrid Vehicles', 'Sign-Up for Exclusive Hybrid Communication from Our Team', 'No more qestions 😊'], -1, 2);

}

function askNextQuestion(answer_text) {
	//var pretext_needed = [4, 8];
	var questions = prescripted_questions[cur_question_index].text;
	var answer = prescripted_questions[cur_question_index].answers; // one number as index
	var next_question = prescripted_questions[cur_question_index].next_questions; //one number as index
	var correct_index = prescripted_questions[cur_question_index].correct_answer_index;

	if(answer_text == answer[correct_index]) {
		if(next_question > -1) {
			bot_typing = 1;
			var next_question_text = prescripted_questions[next_question].text;
			var text = next_question_text[0]; //only one question for this script
			var delay_time = 0;
			if(text.indexOf('gif') > -1) {
				//post gif
				image = text;
				setTimeout(function() {
					postImage(image);
				}, 5000*(i+1));
			} else {
				//waitForBot = setInterval(typingAnim, 500);
				
				/*setTimeout(function() {
					postBotAnswer(text);
				}, 2000);*/
				var post_text = text;

				/*if (pretext_needed.includes(cur_question_index)) {
					post_text = pretext + post_text;
				}*/
				//console.log(i);
				//console.log(post_text);

				//postBotAnswer(post_text);

				// create node here to have typing animation
				var newNode = document.createElement("div");
		    	newNode.setAttribute("class", "chat_message_bot");
		    	var newImg = document.createElement("img");
		    	newImg.src = icon_img;
		    	newImg.setAttribute("width", "8%");
		    	newNode.appendChild(newImg);
		    	newNode.appendChild(document.createTextNode("  Bot is typing..."));
		    	var spaceHolderNode = document.getElementById("test");
		    	

		    	setTimeout(function() {
		    		document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
		    		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
				}, 2000);


				if (text.split(' ').length > 22) { //long sentence
					delay_time = 6000;
					setTimeout(function() {
						//postBotAnswer(post_text)
						newNode.childNodes[1].nodeValue="  " + post_text;
						var audio = new Audio('audio/Pling-KevanGC-1485374730.mp3');
						audio.play();
					}, 6000); //5000
				} else {
					delay_time = 4000;
					setTimeout(function() {
						//postBotAnswer(post_text)
						newNode.childNodes[1].nodeValue="  " + post_text;
						var audio = new Audio('audio/Pling-KevanGC-1485374730.mp3');
						audio.play();
					}, 4000);
				}
				setTimeout(function() {
					document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
				}, 6000);
			}
			
			cur_question_index = next_question;	

			if(prescripted_questions[cur_question_index].answers[0] == "") {
				//clearInterval(waitForBot);
				setTimeout(function() {
					askNextQuestion("");
				}, 12000); //4000
			} else {
				setTimeout(function() {
					createButtonQuickReply(prescripted_questions[cur_question_index].answers, cur_question_index);
				}, delay_time);
				bot_typing = 0;
			}
				

		} else { //last closing chat
			bye = 1;
			setTimeout(function() {
				var outstring = 'It was my pleasure speaking with you today, '+user_name+". If you need any more information, I would be more than happy to help. 😊";
				postBotAnswer(outstring);
			}, 2000);
			setTimeout(function() {
				postImage('https://kikijinqili.github.io/assets/mercedes/Mercedes%20Gif%201.gif');
			}, 4000);
		}
	}
}

function createButtonQuickReply(options, question_index) {
   // options is a string array
   
	var newNode = document.createElement("div");
	newNode.setAttribute("class", "chat_message_bot");
	
	options.forEach(function(answer) {
		var button = document.createElement('button');
		button.setAttribute('class', 'chat_button');
		button.innerHTML = answer;
		button.onclick = function() {
			//console.log(answer);
			//console.log(prescripted_questions[cur_question_index].answers[prescripted_questions[cur_question_index].correct_answer_index])
			if(answer == prescripted_questions[cur_question_index].answers[prescripted_questions[cur_question_index].correct_answer_index]) {
				document.getElementById("chat_box").removeChild(newNode);
				document.getElementById("user_input").value = answer;
				postUserInput();
			}
		};
		newNode.appendChild(button);
	});
	var spaceHolderNode = document.getElementById("test");
	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
	document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;	
}


function postImage(img_filename) {
	var newNode = document.createElement("div");
	newNode.setAttribute("class", "chat_message_bot");
	var newImg = document.createElement("img");
	newImg.src = img_filename;
	newImg.setAttribute("width", "60%");
	//newImg.setAttribute("align", "middle");
	newNode.appendChild(newImg);
	newNode.setAttribute("align", "middle");
	var spaceHolderNode = document.getElementById("test");
	//var height = newImg.getAttribute("height");
  	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
   	//document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
   	setTimeout(function() {
		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
	}, 500);
}

function postBotAnswer(text)
{
	//clearInterval(waitForBot);
	
	if (text!="") {
		var newNode = document.createElement("div");
    	newNode.setAttribute("class", "chat_message_bot");
    	var newImg = document.createElement("img");
    	newImg.src = icon_img;
    	newImg.setAttribute("width", "8%");
    	newNode.appendChild(newImg);
    	newNode.appendChild(document.createTextNode(" " + text));
    	var spaceHolderNode = document.getElementById("test");
    	document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
    	document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;

    	var audio = new Audio('audio/Pling-KevanGC-1485374730.mp3');
		audio.play();
	}
	
	setTimeout(function() {
		document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight
	}, 1000);
}

function postUserInput() 
{
    var newNode = document.createElement("div");
    newNode.setAttribute("class", "chat_message");
    var text = document.getElementById("user_input").value;
    
    user_input = text.toLowerCase();
    
    var valid_input = false;
    var wait_for_bot_response = false;


	if(user_name == "") {
		var input = text.split(" ");
		user_name = input[input.length-1];
		user_name = user_name.charAt(0).toUpperCase() + user_name.slice(1);


		setTimeout(function() {
			postBotAnswer("Hi, " + user_name + "! It\'s nice to meet you.")
		}, 1000);

		//ask the first question
		setTimeout(function() {
			postBotAnswer(prescripted_questions[cur_question_index].text);
			createButtonQuickReply(prescripted_questions[cur_question_index].answers, 1);
			prescripted_mode = 1;
		}, 5000);
	
		valid_input = true;
	
	} else {
		if(bye == 0 && bot_typing == 0) {
			//if(text == correct_answer) {
			//	valid_input = true;
				setTimeout(function() {
					//wait_for_bot_response = true;
					askNextQuestion(text);
				}, 500);
		} 
	}

	//if(valid_input) {
		newNode.appendChild(document.createTextNode(text));
	    var spaceHolderNode = document.getElementById("test");
	    //document.getElementById("chat_box").appendChild(newNode);
	    document.getElementById("chat_box").insertBefore(newNode, spaceHolderNode);
	    document.getElementById("chat_box").scrollTop = document.getElementById("chat_box").scrollHeight;
	    document.getElementById("user_input").value = "";	
	//}
}

function displayBot()
{

	document.getElementById("chat_box").style.display = "block";
	document.getElementById("chat_input").style.display = "block";

	
	if(user_name == '') {
		setTimeout(function() {
		    postBotAnswer("Hello! I am Mercedes-Benz's chatbot powered by artificial intelligence. What is your name?")
		}, 500);
	}
}

function start() 
{
    document.getElementById("chat_box").style.display = "none";
    document.getElementById("chat_input").style.display = "none";
    setTimeout(displayBot, 5000); // display chat box after 5 seconds

    //pre-scripted questions
    createQuestions();
}

window.addEventListener("load", start, false);