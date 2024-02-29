<template>
  <div class="modal-rules">
    <Modal :title="'Правила игры'" @close="emits('close')">
      <img class="modal-rules__image" src="@/assets/images/image-rules.svg"/>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import Modal from "@/components/Modal/Modal.vue";

const emits = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.modal-rules {
  &__image {
    width: 100%;
    margin-top: 32px;

    @media (max-width: 768px) {
      margin-top: 16px;
    }
  }
}
</style>