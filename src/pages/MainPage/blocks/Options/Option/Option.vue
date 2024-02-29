<template>
<div :class="['option', {'option--active': isActiveOption}]" :style="{'background-color': optionVariant.color}">
  <div class="option__inner">
    <img
        :class="['option__image', {'option__image--big': !isActiveOption}]"
        :src="require(`@/assets/images/icons/${optionVariant.imageName}`)"
    />
  </div>
</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  optionVariant: {
    type: Object,
    required: true
  },
  isActiveOption: {
    type: Boolean,
    default: true
  }
});
</script>

<style lang="scss" src="./style.scss" scoped></style>