    const box = document.getElementById('box');
    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function moveBox() {
      const maxX = gameContainer.clientWidth - box.clientWidth;
      const maxY = gameContainer.clientHeight - box.clientHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      box.style.left = randomX + 'px';
      box.style.top = randomY + 'px';
    }

    box.addEventListener('click', () => {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
      moveBox();
    });

    // Start game by moving the box every 1.5 seconds automatically
    moveBox();
    setInterval(moveBox, 1500);

    