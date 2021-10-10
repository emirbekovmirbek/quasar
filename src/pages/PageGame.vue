<template>
  <q-page>
    <div class=" bg-indigo-10 text-white">
      <div class="columns"
           v-for="( questionCategory, index ) in gameData"
           :key="index"
      >
        <div class="row">
          <p class="text-weight-bold q-ma-none col ">{{ questionCategory[0].category.title }}</p>
          <div class="col value" v-for="category in questionCategory"
               :key="category.id"
               @click="() => autoClose(category)"
          >
            {{ category.value }}
          </div>
        </div>
      </div>
    </div>
  </q-page>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useQuasar } from 'quasar';

export default {
  name: 'PageGame',
  components: {},
  setup() {
    const $store = useStore();
    const $q = useQuasar();
    const gameData = computed({
      get: () => $store.getters['user/GET_GAME_DATA'],
    });
    return {
      gameData,
      $q,
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
    autoClose(question) {
      let seconds = 60;
      const dialog = this.$q.dialog({
        title: `<h3 class="text-center text-dark">Category:
                <span class="text-light-green-6">${question.category.title.toUpperCase()}</span> </h3> `,
        message: `<p class="text-weight-medium text-center">
                      Question: <span class="text-indigo-10">${question.question}?</span></p>
                   <p class="text-weight-medium text-center q-mt-xs"> Cost:
                   <span class="text-deep-orange-10"> ${question.value} </span></p>
                   <p class="text-weight-medium text-center q-mt-xs">
                   Closing in ${seconds} second${seconds > 1 ? 's' : ''}</p>`,
        prompt: {
          model: '',
          type: 'text', // optional
        },
        html: true,
      }).onOk(() => {
        console.log('OK');
      }).onCancel(() => {
        console.log('Cancel');
      }).onDismiss(() => {
        // eslint-disable-next-line no-use-before-define
        clearTimeout(timer);
        // console.log('I am triggered on both OK and Cancel')
      });
      const timer = setInterval(() => {
        // eslint-disable-next-line no-plusplus
        seconds--;
        if (seconds > 0) {
          dialog.update({
            message: `<p class="text-weight-medium text-center">
                      Question: <span class="text-indigo-10">${question.question}?</span></p>
                      <p class="text-weight-medium text-center q-mt-xs">Cost:
                      <span class="text-deep-orange-10"> ${question.value} </span></p>
                      <p class="text-weight-medium text-center q-mt-xs">
                      Closing in ${seconds} second${seconds > 1 ? 's' : ''}</p>`,
          });
        } else {
          clearInterval(timer);
          dialog.hide();
        }
      }, 1000);
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
.value{
  cursor: pointer;
}
</style>
