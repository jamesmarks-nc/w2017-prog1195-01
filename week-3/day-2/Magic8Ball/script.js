
function askThe8Ball() {

    var questionNum = "";

    var radioButtons = document.getElementsByName("rbQuestion");

    for(var i = 0; i < radioButtons.length; i = i + 1) {
        var currentRadio = radioButtons[i];
        if(currentRadio.checked === true) {
            questionNum = currentRadio.value;
        }
    }

    console.log("You selected: " + questionNum);

    var answer = "";

    answer = getRandomWord();

    alert(answer);
    
    return false;
}


var words = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Do not count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
};