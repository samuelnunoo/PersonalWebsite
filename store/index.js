export const state = () => ({
  alert:false
})


export const mutations = {
  setAlert(state,alertState){
    state.alert = alertState
  }
}

export const actions = {
  async triggerAlert(state) {
    const waitTime = 3000
    mutations.setAlert(state,true)
    setTimeout(() => {
      mutations.setAlert(state,false)
    },waitTime)
  }
}
