const rl = require('readline-sync');

function createPlayer() {
  return {
    move: null
  };
}

function createComputer() {
  const playerObj = createPlayer();

  const computerObj = {

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    }
  };

  return Object.assign(computerObj, playerObj);
}

function createHuman() {
  const playerObj = createPlayer();

  const humanObj = {

    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = rl.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    }
  };

  return Object.assign(humanObj, playerObj);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    const answer = rl.question();

    return answer.toLowerCase()[0] === 'y';
  },

  displayWinner() {
    const humanMove = this.human.move;
    const computerMove = this.computer.move;

    console.log(`You chose ${humanMove}`);
    console.log(`Computer chose ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if (humanMove === computerMove) {
      console.log("It's a tie");
    } else {
      console.log("The computer wins!");
    }
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }
};

RPSGame.play();