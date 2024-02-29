<template>
  <div class="modal">
    <div class="modal__overlay" @click="emits('close')"/>
    <div class="modal__container">
      <div class="modal__header">
        <div class="modal__title h1">{{title}}</div>
        <img src="@/assets/images/icons/icon-close.svg" alt="" class="modal__close" @click="$emit('close')">
      </div>
      <div class="modal__content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
const emits = defineEmits(['close']);
</script>

<style lang="scss" src="./style.scss" scoped></style>