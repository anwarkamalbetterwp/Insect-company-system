import vObserveAnimation from '~/directives/observeAnimation'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observe-animation', vObserveAnimation);
});