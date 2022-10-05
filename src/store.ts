import { reactive } from 'vue'

type StateStore = {
    sideNav: boolean
    setSideNav: (set: boolean) => void
}

export const store: StateStore = reactive({
  sideNav: true,
  setSideNav: (set: boolean) => {
    store.sideNav = set
  }
})