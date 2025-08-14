let time = 30;
let score = 0;
let gameArea = document.getElementById('game-area');
let timeDisplay = document.getElementById('time');
let scoreDisplay = document.getElementById('score');

function spawnBox() {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.top = Math.random() * 250 + 'px';
    box.style.left = Math.random() * 250 + 'px';
    box.onclick = () => {
        score++;
        scoreDisplay.textContent = score;
        box.remove();
        spawnBox();
    };
    gameArea.appendChild(box);
}

function startGame() {
    spawnBox();
    let countdown = setInterval(() => {
        time--;
        timeDisplay.textContent = time;
        if (time <= 0) {
            clearInterval(countdown);
            gameArea.innerHTML = '<h2>Game Over! Skor kamu: ' + score + '</h2>';
        }
    }, 1000);
}

startGame();
