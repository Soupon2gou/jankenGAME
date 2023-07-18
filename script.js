function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = '';

    if (playerChoice === computerChoice) {
        result = "どろー　もう一回！";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "あなたの勝ち　；；";
    } else {
        result = "あなたの負け　ざ～～～～～～こwwwwwwwwwwwwww";
    }

    var resultElement = document.getElementById('result');
    document.getElementById('result').innerHTML = result;


    // 選択された手に基づいて画像を表示
    var playerImage = '<img src="' + playerChoice + '.png" alt="' + playerChoice + '">';
    var computerImage = '<img src="' + computerChoice + '.png" alt="' + computerChoice + '">';

    resultElement.innerHTML += '<br>' + playerImage + ' vs ' + computerImage ;
    resultElement.innerHTML += '<br>' + '　　　　おまえ' + '　　　　　　　　　　　メスガキ';


}
