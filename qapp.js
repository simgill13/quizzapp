// Create your initial state object


 	// .val()
 	//

var state = {
	
 questions: [{
	questionNumber: 1,
	questionText: "what is the home town of the Simpsons?",
	questionAnswers: ["Washington" , "Hollywood", "Springfield", "Pasadena"],
    correctAnswer: "Springfield",
    correctAnsMsg: "Cowabunga man!",
    wrongAnsMsg: "Doh!",
},
{
	questionNumber: 2,
	questionText: "How is Homer's wife?",
	questionAnswers: ["Marge" , "Peggy", "Mary", "Susan"],
    correctAnswer: "Marge",
    correctAnsMsg: "Cowabunga man!",
    wrongAnsMsg: "Doh!",
},
{
	questionNumber: 3,
	questionText: "How many months does it take to create an Simpsons episode?",
	questionAnswers: ["1" , "2", "4", "6"],
    correctAnswer: "6",
    correctAnsMsg: "Cowabunga man!",
    wrongAnsMsg: "Doh!",
},	
{
	questionNumber: 4,
	questionText: "What is the family's dog name?",
	questionAnswers: ["Santa's Little Helper" , "Ralphy the eater", "Johnny the killer", "Brea the breather"],
    correctAnswer: "Santa's Little Helper",
    correctAnsMsg: "Cowabunga man!",
    wrongAnsMsg: "Doh!",
},

{

	questionNumber: 5,
	questionText: "How many children are in the Simpson family?",
	questionAnswers: ["6" , "2", "3", "5"],
    correctAnswer: "3",
    correctAnsMsg: "Cowabunga man!",
    wrongAnsMsg: "Doh!",


}],
}

    // Questions
    // Answers
    // Your choice of answer	
    // Message(s) to let them know they have the correct answer	
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
};

// State manipulation functions
// Render functions

// Event handlers
// When start button is submitted
$('#startButton').click(function(event) {
	event.preventDefault();	
$('#div2').removeclass("hidden");
// $('.startpage').addclass()
	//hide .startpage and .final and only show .qustions div
});









// Current answer is submitted
$('.answer').submit(function(event) {
});

// Next question
$('.next').click(function(event) {
});

// Restart button is clicked
$('.restart').click(function(event) {
});		