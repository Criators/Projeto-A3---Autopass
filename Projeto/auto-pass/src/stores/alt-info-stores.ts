import { defineStore } from 'pinia';

export const useAltStore = defineStore('alt', {
  state: () => ({
    curAlt: '',
    curValue: '',
  }),
  getters: {
    getAlt: (state) => state.curAlt,
  },
  actions: {
    defineAlt(currentAlt: string) {
      this.curAlt = currentAlt;
    },
    defineValue(currentAlt: string) {
      this.curValue = currentAlt;
    },
  },
});
