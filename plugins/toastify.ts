import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(
    Vue3Toasity,
    {
      autoClose: 3000,
      theme: 'colored',
      position: 'bottom-right',
      clearOnUrlChange: false,
      // ...
    } as ToastContainerOptions,
  );
});
