import { defineStore } from 'pinia'

interface State {
  visible: boolean
  data: any
}

export const usePanelStore = defineStore('panel', {
  state: (): State => ({
    visible: false,
    data: undefined,
  }),
  actions: {
    show(data: any) {
      this.visible = true
      this.data = data
    },
    hide() {
      this.visible = false
      this.data = undefined
    },
  },
})
