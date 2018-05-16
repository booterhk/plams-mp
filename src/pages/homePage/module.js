const state = {
  index: 0,
}

// getters
const getters = {
  index: state => state.index
}

// actions
const actions = {

}

const mutations = {
  setIndex: (state, {index}) => {
    console.log('setIndex',index)
    state.index = index
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}