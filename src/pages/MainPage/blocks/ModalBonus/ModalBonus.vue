<template>
  <div class="modal-bonus">
    <Modal :title="'Этот функционал еще в разработке'" @close="emits('close')">
      <div class="modal-bonus__images">
        <img src="@/assets/images/icons/icon-paper.svg" alt="paper" class="modal-bonus__image">
        <img src="@/assets/images/icons/icon-scissors.svg" alt="scissors" class="modal-bonus__image">
        <img src="@/assets/images/icons/icon-rock.svg" alt="rock" class="modal-bonus__image">
      </div>

    </Modal>
  </div>
</template>

<script lang="ts" setup>
import Modal from "@/components/Modal/Modal.vue";

const emits = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.modal-bonus {
  &__images {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  &__image {
    width: 40px;
  }
}
</style>