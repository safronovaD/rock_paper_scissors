<template>
  <div class="board">
    <img class="board__logo" src="@/assets/images/logo.svg"/>
    <Badge :count="score" :title="'Счет'"/>
  </div>
</template>

<script lang="ts" setup>
import Badge from "@/components/Badge/Badge";

const props = defineProps({
  score: {
    type: Number,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 20px 36px;
  border: 1px solid white;
  border-radius: 16px;

  @media (max-width: 768px) {
    max-width: unset;
    padding: 12px 16px;
    gap: 12px;
  }

  &__logo {
    width: 100%;
    max-width: 180px;

    @media (max-width: 768px) {
      max-width: 100px;
    }
  }
}
</style>