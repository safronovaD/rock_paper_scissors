<template>
<div class="badge">
  <span class="badge__title bold">СЧЕТ</span>
  <span class="badge__count bold">0</span>
</div>
</template>

<style lang="scss" scoped>
.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  padding: 12px 56px;

  @media (max-width: 768px) {
    padding: 12px 32px;
  }

  &__title {
    font-size: 28px;
    color: #4865f4;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  &__count {
    font-size: 72px;
    color: #1f3655;
    line-height: 100%;

    @media (max-width: 768px) {
      font-size: 44px;
    }
  }
}
</style>