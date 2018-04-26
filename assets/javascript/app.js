$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var number = 20;
    var counter = 0;
    // make game start and appear when start button pressed
    $(".game").hide();
    $(".results").hide();

    $("#start").on("click", function () {
        $(".game").show();
        $(this).hide();
        var interval = setInterval(function () {
            counter--;
            if (counter == 5) {
                clearInterval(interval);
            }
        }, 1000);
    })

    $("#stop").on("click", function () {
        $(".game").hide();
        $(".results").show();
        // calculate number of right and wrong answers
        $(".correct").each(function (index, element) {
            if (element.checked === true) {
                correct++;
            }
        });

        $(".rightAnswers").text(correct);
        $(".incorrect").text(8 - correct);
    })

    // start timer counting down from 20 seconds and stopping the game at 0


    // make stop button also stop timer and game




})