<template>
  <button :class="['button bold', {'button--filled': type === 'filled'}]">{{ text }}</button>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'unfilled'
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<style  lang="scss" scoped>
.button {
  display: block;
  width: 100%;
  max-width: 140px;
  padding: 12px 8px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  transition: background-color .3s linear;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 16px;
  }

  &:hover {
    background-color: rgba(211, 211, 211, 0.07);
  }

  &--filled {
    max-width: 232px;
    padding: 16px 8px;
    font-size: 20px;
    background-color: white;
    color: #4865f4;

    &:hover {
      background-color: lightgrey;
    }
  }
}
</style>