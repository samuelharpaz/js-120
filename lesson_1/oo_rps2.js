function createPlayer() {
  return {
    choose() {}
  };
}

function createMove() {
  return {};
}

function createRule() {
  return {};
}

const compare = function (move1, move2) {};

const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),
  
  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  }
};

RPSGame.play();
