
const defaultPath = '/phone'
import { toastAlert } from "@/utils/Alerts/toast";
import { indexFunction, showFunction } from "@/utils/DefaultCrud/defaultsFunctions";
import axios from 'axios'
import { baseApiUrl, catchError } from "@/global";
import { spinnerChoice } from '@/utils/DefaultCrud/spinnerRules'

const setList = ({ commit }, people_id) => {
  indexFunction(commit, defaultPath, `people_id=${people_id}`)
}

const setPhoneDialog = function ({ commit }, value) {
  commit('SET_PHONEDIALOG', value)
}

const save = function ({ commit }, payload) {
  spinnerChoice('modal', true)
  axios.post(`${baseApiUrl + defaultPath}/save`, payload)
    .then(res => {
      if (res.data.status == 201) {
        sessionStorage.setItem(
          "toastMsg",
           `Telefone cadastrado com Sucesso !!!`           
        );
        commit('SET_FORMDATA',{
          id: null,
          type: null,
          note: null,
          people_id: null,
          number: null
        })
        commit('SET_ERRORS', '')
        commit('SET_PHONEDIALOG', false)
        setList({commit}, payload.people_id)
        toastAlert('success')
      } else {
        commit('SET_ERRORS', res.data.errors)
      }
    })
    .catch(e => {
      catchError(e)
    })
    .finally(() => {spinnerChoice('modal', false)})
}

const show = function ({ commit }, payload) {
  showFunction(commit, defaultPath, payload, 'modal')
}

const update = function ({ commit }, payload) {
  spinnerChoice('modal', true)
  axios.post(`${baseApiUrl + defaultPath}/update`, payload)
  .then(res => {
    if (res.data.status == 202) {
      sessionStorage.setItem(
        "toastMsg",
         `Telefone atualizado com Sucesso !!!`           
      );
      commit('SET_FORMDATA', {
        id: null,
        type: null,
        note: null,
        people_id: null,
        number: null
      })
      commit('SET_ERRORS', '')
      commit('SET_PHONEDIALOG', false)
      setList({commit}, payload.people_id)
      toastAlert('success')
    } else {
      commit('SET_ERRORS', res.data.errors)
    }
  })
  .catch(e => {
    catchError(e)
  })
  .finally(() => {spinnerChoice('modal', false)})
}
const cleanPhoneItem = function ({ commit }) {
  commit('SET_FORMDATA', {
    id: null,
    type: null,
    note: null,
    people_id: null,
    number: null
  })
}

const cleanPhoneList = function ({ commit }) {
  commit('SET_LIST', '')
}

const cleanErrors = function ({ commit }) {
  commit('SET_ERRORS', '')
}

export default {
  cleanPhoneList,
  setList,
  save,
  cleanErrors,
  update,
  show,
  cleanPhoneItem,
  setPhoneDialog,
}