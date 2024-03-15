<template>
<div class="result">
  <div class="result__choice">
    <h2 class="result__subtitle">Вы выбрали</h2>
    <div :class="['result__pulse', {'result__pulse--visible': winner === GameWinners.user}]">
      <Option :option-variant="userChoice" :is-active-option="false"/>
    </div>
  </div>
  <div class="result__outcome">
    <h1 v-html="getResultText()"></h1>
    <Button class="result__button" :type="'filled'" :text="'Играть снова'" @click="emits('playAgain')"/>
  </div>
  <div class="result__choice">
    <h2 class="result__subtitle">Компьютер <br>выбрал</h2>
    <div :class="['result__pulse', {'result__pulse--visible': winner === GameWinners.computer}]">
      <Option :option-variant="computerChoice" :is-active-option="false"/>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import Option from "@/pages/MainPage/blocks/Options/Option/Option.vue";
import Button from "@/components/Button/Button.vue";
import {useStore} from "vuex";
import {computed} from "vue";
import {GameWinners} from "@/pages/MainPage/Game";
import {tOptionVariant} from "@/pages/MainPage/blocks/Options/Option/optionsVariants";

const emits = defineEmits(['playAgain']);

const store = useStore(),
    winner = computed((): GameWinners => store.state.winner),
    userChoice = computed((): tOptionVariant => store.state.userChoice),
    computerChoice = computed((): tOptionVariant => store.state.computerChoice);

function getResultText(): string {
  if (winner.value === GameWinners.user) {
    return 'Вы <br>выиграли';
  } else if (winner.value === GameWinners.computer) {
    return 'Вы <br>проиграли';
  } else {
    return 'Ничья';
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>