
const defaultPath = '/adress'
import { toastAlert } from "@/utils/Alerts/toast";
import { indexFunction, showFunction } from "@/utils/DefaultCrud/defaultsFunctions";
import axios from 'axios'
import { baseApiUrl, catchError } from "@/global";
import { spinnerChoice } from '@/utils/DefaultCrud/spinnerRules'


const save = function ({ commit }, payload) {

  spinnerChoice('modal', true)

  axios.post(`${baseApiUrl + defaultPath}/save`, payload)
    .then(res => {
      if (res.data.status == 201) {
        sessionStorage.setItem(
          "toastMsg",
           `Endereço cadastrado com Sucesso !!!`           
        );
        commit('SET_FORMDATA',{
          id: null,
          street: null,
          cep: null,
          neighborhood: null,
          city: null,
          state: null,
          active: null,
          note: null,
          people_id: null
        })
        commit('SET_ERRORS', '')
        commit('SET_ADRESSDIALOG', false)
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

const update = function ({ commit }, payload) {

  spinnerChoice('modal', true)

  axios.post(`${baseApiUrl + defaultPath}/update`, payload)
  .then(res => {
    if (res.data.status == 202) {
      sessionStorage.setItem(
        "toastMsg",
         `Endereço atualizado com Sucesso !!!`           
      );
      commit('SET_FORMDATA', {
        id: null,
        street: null,
        cep: null,
        neighborhood: null,
        city: null,
        state: null,
        active: null,
        note: null,
        people_id: null
      })
      commit('SET_ERRORS', '')
      commit('SET_ADRESSDIALOG', false)
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

const setAdressDialog = function ({ commit }, value) {
  commit('SET_ADRESSDIALOG', value)
}

const cleanAdressList = function ({ commit }) {
  commit('SET_LIST', '')
}

const cleanAdressItem = function ({ commit }) {
  commit('SET_FORMDATA', {
    id: null,
    street: null,
    cep: null,
    neighborhood: null,
    city: null,
    state: null,
    active: null,
    note: null,
    people_id: null
  })
}

const setList = ({ commit }, people_id) => {
  indexFunction(commit, defaultPath, `people_id=${people_id}`)
}

const show = function ({ commit }, payload) {
  showFunction(commit, defaultPath, payload,  'modal')
}

const setAdressIfCep = ({ commit }, payload) => {
  commit('SET_FORMDATA', payload)
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
  setAdressDialog,
  setAdressIfCep
}