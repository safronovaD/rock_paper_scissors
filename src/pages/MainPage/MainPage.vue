<template>
  <div class="main-page">
    <div class="main-page__container container">
      <div class="main-page__content">
        <Board class="main-page__board" :score="Game.score"/>
        <Options v-if="Game.gameStep === 'Choice'" class="main-page__options" @selected="playRound"/>
        <Result v-else :winner="Game.winner" :user-choice="Game.userChoice" :computer-choice="Game.computerChoice" @playAgain="Game.gameStep = 'Choice';"/>
      </div>
      <div class="main-page__controls">
        <Button :type="'unfilled'" :text="'Бонус'" @click="isVisibleModalBonus = true"/>
        <Button :type="'unfilled'" :text="'Правила'" @click="isVisibleModalRules = true"/>
      </div>
    </div>
    <ModalBonus v-if="isVisibleModalBonus" @close="isVisibleModalBonus = !isVisibleModalBonus"/>
    <ModalRules v-if="isVisibleModalRules" @close="isVisibleModalRules = !isVisibleModalRules"/>
  </div>
</template>

<script lang="ts" setup>
import Board from '@/pages/MainPage/blocks/Board/Board';
import Options from "@/pages/MainPage/blocks/Options/Options.vue";
import Result from "@/pages/MainPage/blocks/Result/Result.vue";
import Button from "@/components/Button/Button.vue";
import ModalBonus from "@/pages/MainPage/blocks/ModalBonus/ModalBonus.vue";
import ModalRules from "@/pages/MainPage/blocks/ModalRules/ModalRules.vue";
import {ref, reactive} from 'vue';
import {tOptionVariant} from "@/pages/MainPage/blocks/Options/Option/optionsVariants";
import {GameIns} from "@/pages/MainPage/Game";

type tGame = {
  winner: string | null,
  score: number,
  userChoice: tOptionVariant | null,
  computerChoice: tOptionVariant | null,
  gameStep: string
};

let Game = reactive<tGame>({
  winner: null,
  score: 0,
  userChoice: null,
  computerChoice:  null,
  gameStep: 'Choice'
});

let isVisibleModalRules = ref<boolean>(false),
  isVisibleModalBonus = ref<boolean>(false);

function playRound(userChoice: tOptionVariant): void {
  Game.gameStep = 'Result';
  Game.userChoice = userChoice;
  Game.computerChoice = GameIns.getComputerChoice();
  Game.winner = GameIns.getWinner(Game.userChoice, Game.computerChoice);
  Game.score = GameIns.getNewScore(Game.winner, Game.score);
}
</script>

<style lang="scss" src="./style.scss" scoped></style>