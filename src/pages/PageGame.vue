<template>
  <q-page>
    <div class=" bg-indigo-10 text-white">
      <div class="columns"
           v-for="( questionCategory, index ) in gameData"
           :key="index"
      >
        <div class="row">
          <p class="text-weight-bold q-ma-none col ">{{ questionCategory[0].category.title }}</p>
          <div class="col" v-for="category in questionCategory"
               :key="category.id"
               @click="openModal(category)"
          >
            {{ category.value }}
          </div>
        </div>
      </div>
    </div>
<!--    <ModalTst v-if="questoin"  :question="questoin"/>-->
    <DialogShowQuestion  v-if="questoin" :question="questoin"/>
  </q-page>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import DialogShowQuestion from 'components/DialogShowQuestion';
// import ModalTst from 'components/ModalTst';

export default {
  name: 'PageGame',
  components: { DialogShowQuestion },
  setup() {
    const $store = useStore();
    const gameData = computed({
      get: () => $store.getters['user/GET_GAME_DATA'],
    });
    return {
      gameData,
    };
  },
  data() {
    return {
      questoin: null,
    };
  },
  mounted() {
    const $store = useStore();
    $store.dispatch('user/GET_GAME_DATA_API');
  },
  methods: {
    openModal(category) {
      this.questoin = category;
      console.log(category);
    },
  },
};
</script>
<style lang="scss" scoped>
.row {
  p {
    min-width: 135px !important;
  }
;
}

.col {
  min-width: 60px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid #FFFFFFFF;
}
</style>
