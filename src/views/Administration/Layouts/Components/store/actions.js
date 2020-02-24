const setSpinnerFullScreen = ({ commit }, payload) => {
  commit('SET_SPINNERFULLSCREEN', payload)
}

const setModalSpiner = ({ commit }, payload) => {
  commit('SET_MODALSPINNER', payload)
}

export default {
  setSpinnerFullScreen,
  setModalSpiner
}