function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = '';

    if (playerChoice === computerChoice) {
        result = "Ç«ÇÎÅ[";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "Ç©Ç¡ÇΩÅ`";
    } else {
        result = "Ç¥Å`Å`Å`Å`Å`Å`Ç±ÇóÇóÇóÇóÇóÇóÇóÇó";
    }

    document.getElementById('result').innerHTML = result;
}
