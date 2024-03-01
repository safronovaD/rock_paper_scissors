<template>
  <div class="options">
    <div class="option__wrapper" v-for="option in optionVariants" :key="option.name">
      <Option :option-variant="option" @click="emits('selected', option)"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Option from "@/pages/MainPage/blocks/Options/Option/Option.vue";

import {optionVariants} from "./Option/optionsVariants";

const emits = defineEmits(['selected']);
</script>

<style lang="scss" src="./style.scss" scoped></style>