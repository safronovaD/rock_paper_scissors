<template>
  <div class="options">
    <div class="options__row">
      <div class="option__wrapper">
        <Option :option-variant="paper"/>
      </div>
      <div class="option__wrapper">
        <Option :option-variant="scissors"/>
      </div>
    </div>
    <div class="options__row">
      <Option :option-variant="rock"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Option from "@/pages/MainPage/blocks/Options/Option/Option.vue";

import {paper, scissors, rock} from "./Option/optionsVariants";
</script>

<style lang="scss" src="./style.scss" scoped></style>