import {createStore} from 'vuex';
import {tOptionVariant} from "@/pages/MainPage/blocks/Options/Option/optionsVariants";
import {GameWinners} from "@/pages/MainPage/Game";

type tGameState = {
  winner: GameWinners,
  score: number,
  userChoice: tOptionVariant | null,
  computerChoice: tOptionVariant | null
};

const state: tGameState = {
  winner: GameWinners.nobody,
  score: 0,
  userChoice: null,
  computerChoice: null
};

const mutations = {
  setChoices(state: tGameState, { userChoice, computerChoice }: { userChoice: tOptionVariant, computerChoice: tOptionVariant }): void {
    state.userChoice = userChoice;
    state.computerChoice = computerChoice;
  },
  setWinner(state: tGameState, winner: GameWinners): void {
    state.winner = winner;
  },
  setScore(state: tGameState, score: number): void {
    state.score = score;
  }
};

export default createStore({
  state,
  mutations
});