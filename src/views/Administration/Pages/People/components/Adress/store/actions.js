
const defaultPath = '/adress'
const toastName = 'O Cliente'
import { indexFunction, updateFunction, showFunction } from "@/utils/DefaultCrud/defaultsFunctions";
import axios from 'axios'
import { baseApiUrl, catchError } from "@/global";


const save = function ({ commit }, payload) {
  axios.post(`${baseApiUrl + defaultPath}/save`, payload)
    .then(res => {
      if (res.data.status == 201) {
        commit('SET_FORMDATA', '')
        commit('SET_ERRORS', '')
        commit('SET_ADRESSDIALOG', false)
      } else {
        commit('SET_ERRORS', res.data.errors)
      }
    })
    .catch(e => {
      catchError(e)
    });
}

const setAdressDialog = function ({ commit }, value) {
  commit('SET_ADRESSDIALOG', value)
}

const cleanAdressList = function ({ commit }) {
  commit('SET_LIST', '')
}

const cleanAdressItem = function ({ commit }) {
  commit('SET_FORMDATA', '')
}

const setList = ({ commit }, people_id) => {
  indexFunction(commit, defaultPath, `people_id=${people_id}`)
}

const show = function ({ commit }, payload) {
  showFunction(commit, defaultPath, payload)
}








const update = function ({ commit }, payload) {
  updateFunction(commit, defaultPath, payload, `${toastName + ' ' + payload.fantasy_name}`)
}

const cleanErrors = function ({ commit }) {
  commit('SET_ERRORS', '')
}






export default {
  cleanAdressList,
  setList,
  save,
  cleanErrors,
  update,
  show,
  cleanAdressItem,
  setAdressDialog
}