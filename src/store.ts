import { reactive } from 'vue'

type StateStore = {
    sideNav: boolean
    screenWidth: Number,
    setScreenWidth: (width: Number) => void,
    setSideNav: (set: boolean) => void
}

export const store: StateStore = reactive({
  sideNav: true,
  screenWidth: window.innerWidth || document.documentElement.clientWidth,
  setScreenWidth: (width: Number) => {
    store.screenWidth = width
  }, 
  setSideNav: (set: boolean) => {
    store.sideNav = set
  }
})