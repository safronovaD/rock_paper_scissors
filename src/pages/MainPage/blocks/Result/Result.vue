<template>
<div class="result">
  <div class="result__choice">
    <h2 class="result__subtitle">Вы выбрали</h2>
    <div :class="['result__main-pulse', {'result__main-pulse--visible': false}]">
      <div :class="['result__additional-pulse', {'result__additional-pulse--visible': false}]">
        <Option :option-variant="rock" :is-active-option="false"/>
      </div>
    </div>
  </div>
  <div class="result__outcome">
    <h1>Вы <br>проиграли</h1>
    <Button class="result__button" :type="'filled'" :text="'Играть снова'"/>
  </div>
  <div class="result__choice">
    <h2 class="result__subtitle">Компьютер <br>выбрал</h2>
    <div :class="['result__main-pulse', {'result__main-pulse--visible': true}]">
      <div :class="['result__additional-pulse', {'result__additional-pulse--visible': true}]">
        <Option :option-variant="paper" :is-active-option="false"/>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import Option from "@/pages/MainPage/blocks/Options/Option/Option.vue";

import {paper, scissors, rock} from "../Options/Option/optionsVariants";
import Button from "@/components/Button/Button.vue";
</script>

<style lang="scss" src="./style.scss" scoped></style>