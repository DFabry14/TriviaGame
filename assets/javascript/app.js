$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = 20;
    var countdownSpan = $("#countdown")
    countdownSpan.text(timer);

    var countdown;

    function decrement() {
        timer--;
        countdownSpan.text(timer);
        if (timer <= 0) {
            endGame();
        }
    }
    // make game start and appear when start button pressed
    $(".game").hide();
    $(".results").hide();

    $("#start").on("click", function () {
        $(".game").show();
        $(this).hide(); 
        countdown = setInterval(decrement, 1000);
    })

    $("#stop").on("click", endGame)

    function endGame(){
        clearInterval(countdown);
        $(".game").hide();
        $(".results").show();
        $(".correct").each(function (index, element) {
            if (element.checked === true) {
                correct++;
            } 
        });
        $(".wrong").each(function (index, element) {
            if (element.checked === true) {
                incorrect++;
            } 
        });

        $(".rightAnswers").text(correct);
        $(".incorrect").text(incorrect);
        $(".unanswered").text(8- correct - incorrect);
    }

    // start timer counting down from 20 seconds and stopping the game at 0


    // make stop button also stop timer and game




})