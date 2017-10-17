var audioCantStop = document.createElement("audio");
audioCantStop.setAttribute("src", "assets/audio/CantStopThatFeeling.mp3");

function showScores(){
    //clear everything from elements
    $(".round").empty();
    $(".question").empty();
    $(".time-remaining").empty();
    $(".answer-response").empty();
    $(".question-options").empty();
    $(".response-image").empty();

    $(".round").html("The Results Are In");
    let correctElement = $("<div>");
    let wrongElement = $("<div>");

    correctElement.html("Correct Answers: " + trivia.correctAnswers);
    wrongElement.html("Wrong Answers: " + trivia.incorrectAnswers);

    $(".question").append(correctElement);
    $(".question").append(wrongElement);

}

