let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let timerId;
let questionTimer = 10;



$("#startButton").on("click", function () {

    $("#startButton").css("display", "none");
    $(".answers").css("display", "inherit");
    startQuiz();




})



function startQuiz() {

    clearAnswers();
    $("#timeRemaining").css("display", "inherit");
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;


    questionOne();


}





function questionOne() {

    clearAnswers();


    let id = setInterval(() => {


        $("#timer").text(questionTimer);
        questionTimer--;


        if (questionTimer < 0) {

            clearInterval(id);
            unanswered++;
            $(".answers").css("display", "none");
            $("#question").empty();
            $(".game").css("display", "none");

            $("#question").text("Times up!");
            $("#question").append(" Correct Answer: Tim Drake");
            $("#question").append($('<img>', { src: 'tim.gif' }));



            setTimeout(questionTwo, 5000);




        }



    }, 1000);





    $("#question").text("Who is the third Robin?");
    $("#answer1").text("Damien Wayne");
    $("#answer2").text("Tim Drake");
    $("#answer3").text("Dick Greyson");
    $("#answer4").text("Jason Todd");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Tim Drake");
        $("#question").append($('<img>', { src: 'tim.gif' }));


        setTimeout(questionTwo, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'tim.gif' }));




        setTimeout(questionTwo, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Tim Drake");
        $("#question").append($('<img>', { src: 'tim.gif' }));


        setTimeout(questionTwo, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Tim Drake");
        $("#question").append($('<img>', { src: 'tim.gif' }));


        setTimeout(questionTwo, 5000);





    })


    



}


function questionTwo() {

    clearAnswers();


    let id = setInterval(() => {


        $("#timer").text(questionTimer);
        questionTimer--;


        if (questionTimer < 0) {

            clearInterval(id);
            unanswered++;
            $(".answers").css("display", "none");
            $("#question").empty();
            $(".game").css("display", "none");

            $("#question").text("Times up!");
            $("#question").append(" Correct Answer: Christian Bale");
            $("#question").append($('<img>', { src: 'bale.gif' }));



            setTimeout(questionThree, 5000);




        }



    }, 1000);





    $("#question").text("Who played Batman in the Chrisopher Nolan films?");
    $("#answer1").text("Christian Bale");
    $("#answer2").text("Patrick Patman");
    $("#answer3").text("Michael Keaton");
    $("#answer4").text("Jack Napier");


    $("#answer1").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'Bale.gif' }));


        setTimeout(questionThree, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Christian Bale");
        $("#question").append($('<img>', { src: 'bale.gif' }));




        setTimeout(questionThree, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Christian Bale");
        $("#question").append($('<img>', { src: 'bale.gif' }));


        setTimeout(questionThree, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Christian Bale");
        $("#question").append($('<img>', { src: 'bale.gif' }));


        setTimeout(questionThree, 5000);





    })


    



}


function questionThree() {

    clearAnswers();


    let id = setInterval(() => {


        $("#timer").text(questionTimer);
        questionTimer--;


        if (questionTimer < 0) {

            clearInterval(id);
            unanswered++;
            $(".answers").css("display", "none");
            $("#question").empty();
            $(".game").css("display", "none");

            $("#question").text("Times up!");
            $("#question").append(" Correct Answer: Helena Bertinelli");
            $("#question").append($('<img>', { src: 'huntress.gif' }));



            setTimeout(questionFour, 5000);




        }



    }, 1000);





    $("#question").text("The Huntress is the secret identity of which character?");
    $("#answer1").text("Helena Bertinelli");
    $("#answer2").text("Emma Frost");
    $("#answer3").text("Shana Blane");
    $("#answer4").text("Barbara Gordon");


    $("#answer1").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'huntress.gif' }));


        setTimeout(questionFour, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Helena Bertinelli");
        $("#question").append($('<img>', { src: 'huntress.gif' }));




        setTimeout(questionFour, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Helena Bertinelli");
        $("#question").append($('<img>', { src: 'huntress.gif' }));




        setTimeout(questionFour, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Helena Bertinelli");
        $("#question").append($('<img>', { src: 'huntress.gif' }));




        setTimeout(questionFour, 5000);





    })


    



}


function questionFour() {

    clearAnswers();


    let id = setInterval(() => {


        $("#timer").text(questionTimer);
        questionTimer--;


        if (questionTimer < 0) {

            clearInterval(id);
            unanswered++;
            $(".answers").css("display", "none");
            $("#question").empty();
            $(".game").css("display", "none");

            $("#question").text("Times up!");
            $("#question").append(" Correct Answer: Umbrella");
            $("#question").append($('<img>', { src: 'pen.gif' }));



            setTimeout(questionFive, 5000);




        }



    }, 1000);





    $("#question").text("What is the Penguin's signature item?");
    $("#answer1").text("Fish");
    $("#answer2").text("Flippers");
    $("#answer3").text("Umbrella ");
    $("#answer4").text("Clown car");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Umbrella");
        $("#question").append($('<img>', { src: 'pen.gif' }));


        setTimeout(questionFive, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Umbrella");
        $("#question").append($('<img>', { src: 'pen.gif' }));



        setTimeout(questionFive, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'pen.gif' }));


        setTimeout(questionFive, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: Umbrella");
        $("#question").append($('<img>', { src: 'pen.gif' }));


        setTimeout(questionFive, 5000);





    })


    



}


function questionFive() {

    clearAnswers();


    let id = setInterval(() => {


        $("#timer").text(questionTimer);
        questionTimer--;


        if (questionTimer < 0) {

            clearInterval(id);
            unanswered++;
            $(".answers").css("display", "none");
            $("#question").empty();
            $(".game").css("display", "none");

            $("#question").text("Times up!");
            $("#question").append(" Correct Answer: His parents died in front of him as a child");
            $("#question").append($('<img>', { src: 'parents.gif' }));



            setTimeout(quizResults, 5000);




        }



    }, 1000);





    $("#question").text("Bruce Wayne became Batman because ____");
    $("#answer1").text("His Butler died");
    $("#answer2").text("The joker poisoned Gotham's water supply");
    $("#answer3").text("His parents died in front of him as a child ");
    $("#answer4").text("Commissioner Gordon told him to");


    $("#answer1").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: His parents died in front of him as a child");
        $("#question").append($('<img>', { src: 'parents.gif' }));



        setTimeout(quizResults, 5000);





    })

    $("#answer2").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: His parents died in front of him as a child");
        $("#question").append($('<img>', { src: 'parents.gif' }));



        setTimeout(quizResults, 5000);





    })

    $("#answer3").on("click", function () {
        clearInterval(id);
        correctAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Correct!");
        $("#question").append($('<img>', { src: 'parents.gif' }));



        setTimeout(quizResults, 5000);





    })
    $("#answer4").on("click", function () {
        clearInterval(id);
        incorrectAnswers++;
        $(".answers").css("display", "none");
        $("#question").empty();
        $(".game").css("display", "none");

        $("#question").text("Wrong!");
        $("#question").append(" Correct Answer: His parents died in front of him as a child");
        $("#question").append($('<img>', { src: 'parents.gif' }));



        setTimeout(quizResults, 5000);





    })


    



}









function quizResults() {


    $(".answers").css("display", "none");
    $("#question").empty();
    $(".game").css("display", "none");

    clearAnswers();

    clearInterval(id);
    $("#timeRemaining").css("display", "none");
    $("#questions").append(`Number of correct answers: ${correctAnswers}`);
    $("#questions").append(`Number of incorrect answers: ${incorrectAnswers}`);
    $("#questions").append(`Number of unanswered questions: ${unanswered}`);

    $("#startOver").css("display", "inherit");


}

function clearAnswers() {


    questionTimer = 10;
    $(".answers").css("display", "inherit");
    $("#question").text("");
    $("#answer1").text("");
    $("#answer2").text("");
    $("#answer3").text("");
    $("#answer4").text("");





}

