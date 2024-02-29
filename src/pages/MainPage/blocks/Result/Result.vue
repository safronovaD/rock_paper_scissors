<template>
<div class="result">
  <div class="result__choice">
    <h2 class="result__subtitle">Вы выбрали</h2>
    <div :class="['result__main-pulse', {'result__main-pulse--visible': winner === 'User'}]">
      <div :class="['result__additional-pulse', {'result__additional-pulse--visible': winner === 'User'}]">
        <Option :option-variant="userChoice" :is-active-option="false"/>
      </div>
    </div>
  </div>
  <div class="result__outcome">
    <h1 v-html="getResultText()"></h1>
    <Button class="result__button" :type="'filled'" :text="'Играть снова'" @click="emits('playAgain')"/>
  </div>
  <div class="result__choice">
    <h2 class="result__subtitle">Компьютер <br>выбрал</h2>
    <div :class="['result__main-pulse', {'result__main-pulse--visible': winner === 'Computer'}]">
      <div :class="['result__additional-pulse', {'result__additional-pulse--visible': winner === 'Computer'}]">
        <Option :option-variant="computerChoice" :is-active-option="false"/>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import Option from "@/pages/MainPage/blocks/Options/Option/Option.vue";
import Button from "@/components/Button/Button.vue";

const props = defineProps({
  winner: {
    type: String
  },
  userChoice: {
    type: Object,
    required: true
  },
  computerChoice: {
    type: Object,
    required: true
  },
});

const emits = defineEmits(['playAgain']);

function getResultText(): string {
  if(props.winner === 'User') {
    return 'Вы <br>выиграли';
  } else if(props.winner === 'Computer') {
    return 'Вы <br>проиграли';
  } else {
    return 'Ничья';
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>