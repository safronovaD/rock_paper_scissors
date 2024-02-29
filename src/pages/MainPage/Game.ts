import {tOptionVariant, optionVariants} from "@/pages/MainPage/blocks/Options/Option/optionsVariants";

class Game {
  getComputerChoice(): tOptionVariant {
    return optionVariants[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
  }

  getWinner(userChoice: tOptionVariant, computerChoice: tOptionVariant): string | null {
    if(userChoice.name === computerChoice?.name) {
      return null;
    } else if((userChoice.name === 'rock' && computerChoice?.name === 'scissors') ||
      (userChoice.name === 'scissors' && computerChoice?.name === 'paper') ||
      (userChoice.name === 'paper' && computerChoice?.name === 'rock')) {
      return  'User';
    } else {
      return  'Computer';
    }
  }

  getNewScore(winner: string | null, currentScore: number): number {
    if(winner === 'User')
      return currentScore + 1;
    else if(winner === 'Computer')
      return currentScore - 1 < 0? 0: currentScore - 1;
    else 
      return currentScore;
  }
};

const GameIns = new Game();

export { GameIns };

