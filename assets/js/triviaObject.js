var trivia = {
    rounds: [
        //round 1
        { //classic rock
            questions: ["What was one of its previous names before this new wave band settled on 'The Cars'?",
             "2",
              "3"
            ],
            //round answer options
            options: [
                {choices: ["Cap'n Swing", "Down n' Dirty", "The Cocktails", "Sound Garden"]},//question 1 choices
                {choices: ["blondie", "led zepplin", "option3", "option4"]},//question 2 choices
                {choices: ["blondie", "led zepplin", "option3", "option4"]}//question 3 choices
            ],
            answers: ["Cap'n Swing", "led zepplin", "option3"],
            answerImages: ["capNSwing.jpg"]
            
        },
        //round 2
        { //vanity
            questions: ["2"],
            //round answer options --> one around per question
            options: [
                {choices: ["blondie", "led zepplin", "option3", "option4"]},
                {choices: ["blondie", "led zepplin", "option3", "option4"]},
                {choices: ["blondie", "led zepplin", "option3", "option4"]}
            ],
            answers: [],
            answerImages: ["capNSwing.jpg"]
        },
        //round 3
        { //politics
            questions: ["3"],
            //round answer options --> one around per question
            options: [
                {choices: ["blondie", "led zepplin", "option3", "option4"]},
                {choices: ["blondie", "led zepplin", "option3", "option4"]},
                {choices: ["blondie", "led zepplin", "option3", "option4"]}
            ],
            answers: [],
            answerImages: ["capNSwing.jpg"]
        }
    ],

    currentRound: 0,
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    timeRemaining: 30,
}
