//function that links to html
function beginTrivia() {

    //reset rounds to 0
    trivia.currentRound = 0;
    showQuestion();
    $( ".jumbotron" ).fadeOut( "slow", function(){});

}