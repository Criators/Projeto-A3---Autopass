import { defineStore } from 'pinia';

export const useAltStore = defineStore('alt', {
  state: () => ({
    curAlt: '',
    curValue: '',
    lastRoute: '',
  }),
  getters: {
    getAlt: (state) => state.curAlt,
  },
  actions: {
    defineAlt(currentAlt: string) {
      this.curAlt = currentAlt;
    },
    defineValue(curValue: string) {
      this.curValue = curValue;
    },
    defineRoute(route: string) {
      this.lastRoute = route;
    },
  },
});
