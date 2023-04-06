$(document).ready(function(){
    correct = ["2009", "Shigeo Katsu", "SHSS and SST", "Health Project"];
    questions = ["Which year Nazarbayev University was founded?", "Who is the president of Nazarbayev University?", "Which schools were merged to create SSH?", "Which of the following food outlets located in old dormitory?"];
    choice_options = [["2009","2010","2011","2012"],["Donald Trump","Nursultan Nazarbayev","Shigeo Katsu","Kasym-Jomart Tokayev"], ["SHSS and SST", "SEDS and SHSS", "SMG and SST", "SEDS and SMG"], ["Marketplace", "Corner Meal", "Free Flow", "Health Project"]];

    quizBox = $("#quiz-box");

    for (let i = 0; i < questions.length; i++) {
        quizBox.append(`<div class="question">
            <p class="d">${questions[i]}</p>
            <label><input type="radio" name="q${i+1}" value="${choice_options[i][0]}">${choice_options[i][0]}</label>
            <label><input type="radio" name="q${i+1}" value="${choice_options[i][1]}">${choice_options[i][1]}</label>
            <label><input type="radio" name="q${i+1}" value="${choice_options[i][2]}">${choice_options[i][2]}</label>
            <label><input type="radio" name="q${i+1}" value="${choice_options[i][3]}">${choice_options[i][3]}</label>
        </div>`);
    }

    countCorrect = 0;
    
    $("button").click(function(event) {
        countCorrect = 0;

        for (let i = 0; i < correct.length; i++) {
            const chosenOption = $(`input[name=q${i+1}]:checked`).val();
            if (chosenOption == correct[i]) {
                countCorrect++;
            }
        }
        quizBox.append(`<h2>Result of the quiz is: ${countCorrect}</h2>`);
    });
});
