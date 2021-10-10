<template>
  <!-- notice dialogRef here -->
  <q-btn label="Auto Closing" color="primary" @click="autoClose" />
</template>
<script>
import { useQuasar, useDialogPluginComponent } from 'quasar';

export default {
  name: 'DialogShowQuestion',
  props: {
    question: {
      type: Object,
      default() {
        return null;
      },
    },
  },

  setup() {
    const $q = useQuasar();
    const { dialogRef } = useDialogPluginComponent();
    function autoClose() {
      let seconds = 12;
      console.log(dialogRef);
      const dialog = $q.dialog({
        title: 'Alert',
        message: `${seconds}`,
        prompt: {
          model: '',
          type: 'text', // optional
        },
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
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
            message: `Autoclosing in ${seconds} second${seconds > 1 ? 's' : ''}.`,
          });
        } else {
          clearInterval(timer);
          dialog.hide();
        }
      }, 1000);
    }
    return {
      autoClose,
      dialogRef,
    };
    // eslint-disable-next-line no-unreachable
  },
};
</script>

<style lang="scss">
.modal{
 height: inherit;
  width: inherit;
}
</style>
