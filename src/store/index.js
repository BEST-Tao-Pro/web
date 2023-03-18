import { createStore } from 'vuex'

export default createStore({
  state: {
    userdata:{
      num:'1',
      pas:'2'
    }
  },
  getters: {
  },
  mutations: {
    updateuserdata(state,data){
      state.userdata=data
    }
  },
  actions: {
  },
  modules: {
  }
})
