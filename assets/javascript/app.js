// Variable that holds timer interval
var interval;

// Array of objects for questions/answers
var questions = 
[
	{
		question: 'What company feeds over 1% of the world a day?',
		choices: ['McDonald\'s','Whole Foods', 'Walmart', 'Google'],
		answer:	0
	},
	{
		question: 'What is the % of scientists that alive now, that have ever lived?',
		choices: ['15%','25%', '55%', '90%'],
		answer:	3
	},
	{
		question: 'What fruit is more efficient than coffee at waking you up?',
		choices: ['Orange','Apple', 'Kiwi', 'Mango'],
		answer:	1
	},
	{
		question: 'What is the average cost of raising a child before college?',
		choices: ['$35K','$90K', '$155K', '$245K'],
		answer:	3
	},
	{
		question: 'How much money does the founder of Bitcoin have in bitcoins?',
		choices: ['$5M','$100M', '$800M', '$1.1B'],
		answer:	3
	},
	{
		question: 'How many bombs did the US drop in 2016?',
		choices: ['100','500', '100K', '26K'],
		answer:	3
	},
	{
		question: 'How many nights of not sleeping makes you legally drunk?',
		choices: ['7','3', '10', '1'],
		answer:	3
	}

]

// Object container for game
var trivia = {

	time: 10,
	used: [],
	//rand: Math.floor(Math.random() * questions.length),

	start: function() {

		// Show questions and answers
		$('.questions').show();
		$('.labels').show();

		//var currentQ = questions[trivia.rand].question;

		// Display questions
		$('#start').html(trivia.interval());
		$('#1').html(questions[0].question);
		$('#2').html(questions[1].question);
		$('#3').html(questions[2].question);
		$('#4').html(questions[3].question);
		$('#5').html(questions[4].question);
		$('#6').html(questions[5].question);
		$('#7').html(questions[6].question);

		// Display answers
		$('#start').html(trivia.interval());
		$('#2').html(questions[1].choices);
		$('#3').html(questions[2].choices);
		$('#4').html(questions[3].choices);
		$('#5').html(questions[4].choices);
		$('#6').html(questions[5].choices);
		$('#7').html(questions[6].choices);
	},

	// $("#question1 :input").change(function() {
//     console.log(this); // points to the clicked input button
// });

	// Incorrect
	// Corrrect

	count: function() {
		trivia.time--;
		$('#start').html('Time Remaining: ' + trivia.time + ' Seconds');
	},

	interval: function() {
		interval = setInterval(trivia.count, 1000);
	},

	display: function() {

	},

	reset: function() {
		trivia.time = 60;
	},

	stop: function(){
		clearInterval(interval);
	}
}

// Hide questions and answers until game is initiated
$('.questions').hide();
$('.labels').hide();

// Code will start when "start" button is clicked 
$('#start').on('click', function(){

	trivia.start();
	
});

