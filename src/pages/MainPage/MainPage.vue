<template>
  <div class="main-page">
    <div class="main-page__container container">
      <div class="main-page__content">
        <Board class="main-page__board"/>
        <Options
            v-if="currentGameStep === GameSteps.choice"
            class="main-page__options"
            @selected="currentGameStep = GameSteps.result"
        />
        <Result
            v-else
            @playAgain="currentGameStep = GameSteps.choice"
        />
      </div>
      <div class="main-page__controls">
        <Button :type="'unfilled'" :text="'Бонус'" @click="isVisibleModalBonus = true"/>
        <Button :type="'unfilled'" :text="'Правила'" @click="isVisibleModalRules = true"/>
      </div>
    </div>
    <ModalBonus v-if="isVisibleModalBonus" @close="isVisibleModalBonus = !isVisibleModalBonus"/>
    <ModalRules v-if="isVisibleModalRules" @close="isVisibleModalRules = !isVisibleModalRules"/>
  </div>
</template>

<script lang="ts" setup>
import Board from '@/pages/MainPage/blocks/Board/Board';
import Options from "@/pages/MainPage/blocks/Options/Options.vue";
import Result from "@/pages/MainPage/blocks/Result/Result.vue";
import Button from "@/components/Button/Button.vue";
import ModalBonus from "@/pages/MainPage/blocks/ModalBonus/ModalBonus.vue";
import ModalRules from "@/pages/MainPage/blocks/ModalRules/ModalRules.vue";
import {ref, onBeforeMount, computed} from 'vue';
import {useStore} from 'vuex'

const enum GameSteps {
  choice = 'Choice',
  result = 'Result'
};

const store = useStore(),
    setScore = (score: number) =>
        store.commit('setScore', score);

let currentGameStep = ref<GameSteps>(GameSteps.choice),
    isVisibleModalRules = ref<boolean>(false),
    isVisibleModalBonus = ref<boolean>(false);

onBeforeMount(() => {
  const score = localStorage.getItem('gameScore');
  if (typeof score === 'string') {
    setScore(JSON.parse(score));
  }
});
</script>

<style lang="scss" src="./style.scss" scoped></style>