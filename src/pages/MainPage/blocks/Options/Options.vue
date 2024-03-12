<template>
  <div class="options">
    <div class="option__wrapper" v-for="option in optionVariants" :key="option.name">
      <Option :option-variant="option" @click="playRound(option)"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Option from "@/pages/MainPage/blocks/Options/Option/Option.vue";

import {optionVariants, tOptionVariant} from "./Option/optionsVariants";
import {GameIns, GameWinners} from "@/pages/MainPage/Game";
import {useStore} from "vuex";
import {computed} from "vue";

const emits = defineEmits(['selected']);

const store = useStore(),
    score = computed((): number => store.state.score),
    winner = computed((): GameWinners => store.state.winner),
    userChoice = computed((): tOptionVariant => store.state.userChoice),
    computerChoice = computed((): tOptionVariant => store.state.computerChoice),
    setChoices = (userChoice: tOptionVariant, computerChoice: tOptionVariant) =>
        store.commit('setChoices', { userChoice, computerChoice }),
    setWinner = (winner: GameWinners) =>
        store.commit('setWinner', winner),
    setScore = (score: number) =>
        store.commit('setScore', score);

function playRound(currentUserChoice: tOptionVariant): void {
  const currentComputerChoice = GameIns.getComputerChoice();

  setChoices(currentUserChoice, currentComputerChoice);
  setWinner(GameIns.getWinner(userChoice.value, computerChoice.value));
  setScore(GameIns.getNewScore(winner.value, score.value));

  localStorage.setItem('gameScore', JSON.stringify(score.value));

  emits('selected');
}
</script>

<style lang="scss" src="./style.scss" scoped></style>