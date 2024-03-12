import {tOptionVariant, optionVariants} from "@/pages/MainPage/blocks/Options/Option/optionsVariants";

const enum GameWinners {
  user = 'User',
  computer = 'Computer',
  nobody = 'Nobody'
};

class Game {
  getComputerChoice(): tOptionVariant {
    return optionVariants[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
  }

  getWinner(userChoice: tOptionVariant, computerChoice: tOptionVariant): GameWinners {
    if (userChoice.name === computerChoice.name) {
      return GameWinners.nobody;
    } else if ((userChoice.name === 'rock' && computerChoice.name === 'scissors') ||
      (userChoice.name === 'scissors' && computerChoice.name === 'paper') ||
      (userChoice.name === 'paper' && computerChoice.name === 'rock')) {
      return GameWinners.user;
    } else {
      return GameWinners.computer;
    }
  }

  getNewScore(winner: GameWinners, currentScore: number): number {
    if (winner === GameWinners.user)
      return currentScore + 1;
    else if (winner === GameWinners.computer)
      return currentScore === 0? currentScore: currentScore - 1;
    else 
      return currentScore;
  }
};

const GameIns = new Game();

export { GameIns, GameWinners };

