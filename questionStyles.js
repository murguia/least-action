function question(sNum, sText) {
    document.write(
        '<div class="question-card">' +
            '<div class="q-num">' + sNum + '</div>' +
            '<div class="q-body">' + sText + '</div>' +
        '</div>'
    );
}

function technicalQuestion(sNum, sText) {
    document.write(
        '<div class="tech-question-card">' +
            '<div class="q-num">' + sNum + '</div>' +
            '<div class="q-body">' + sText + '</div>' +
        '</div>'
    );
}

function technicalQuestionIntro(sNum, sText) {
    document.write('<p class="tech-intro">' + sText + '</p>');
}
