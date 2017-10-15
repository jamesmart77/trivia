var intervalID;

function showQuestion() {

    $(".round").html("Round " + trivia.currentRound + 1);//+1 because of 0 index array
    $(".question").html("Question " + trivia.currentQuestion + 1);
    $(".time-remaining").html("Time Remaining: " + trivia.timeRemaining);

    //print 4 option buttons for current round question
    for (var i = 0; i < 4; i++) {
        let optionElement = $("<button>");

        optionElement.addClass("btn btn-warning option-btn");
        optionElement.html(trivia.rounds[trivia.currentRound].options[trivia.currentQuestion].choices[i]);
        $(".question-options").append(optionElement)
    }

    //start count down on clock
    intervalID = setInterval(stopWatch, 1000);
}

function stopWatch() {
    //decrement by 1
    let timeLeft = trivia.timeRemaining--;

    //print time remaining
    if (timeLeft > 0) {
        $(".time-remaining").html("Time Remaining: " + timeLeft);
    } else {
        $(".time-remaining").html("Time is Up!");
        clearInterval(intervalID);
    }

}

function nextRound() {

}

//user selects an option
$(".question-options").on("click", ".option-btn", function () {

    let guess = ($(this).html());
    let answer = trivia.rounds[trivia.currentRound].answers[trivia.currentQuestion];
    let result
    if(guess === answer){
        trivia.correctAnswers ++;
        result = "correctly";
    } else{
        trivia.incorrectAnswers ++;
        result = "incorrectly";
    }
    clearInterval(intervalID);
    showResponse(result, answer);
});

function showResponse(result, answer){

    if(result === "correctly"){
        $(".answer-response").html("You answered <b>" + result + "</b>!")
    } else {
        $(".answer-response").html("You answered <b>" + result + "</b>! The correct answer was " + answer);
    }

    $(".question-options").empty();

    let answerImage = $("<img>");
    answerImage.addClass("answerImg");
    //add audio clip
    
    let imageAddress = "assets/images/" + trivia.rounds[trivia.currentRound].answerImages[trivia.currentQuestion];

    answerImage.attr("src", imageAddress);
    $(".response-image").append(answerImage);

}