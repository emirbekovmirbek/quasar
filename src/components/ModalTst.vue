<template>
  <div class="q-pa-md q-gutter-sm">

    <q-dialog v-model="openModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{question?.category?.title}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">

        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  name: 'ModalTst',
  props: {
    question: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      openModal: this.question !== null,
    };
  },
  methods: {
    closeModal: () => {
      console.log('asdfsdf');
    },
  },
};
</script>

<style>

</style>
