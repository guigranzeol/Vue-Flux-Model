
const defaultPath = '/people'
const toastName = 'O Cliente'
const msgCatchError = 'Algo Deu errado Tente Novamente'

import axios from 'axios'
import { baseApiUrl } from "@/global";
import router from '@/router/index'

import {indexFunction,  updateFunction, showFunction} from "@/utils/DefaultCrud/defaultsFunctions";


const setList = ({ commit }) => {     
  indexFunction(commit, defaultPath)
} 

// const save = function({commit}, payload) {
//   saveFunction(commit, defaultPath, payload, `${toastName +' '+ payload.fantasy_name}`)
// }

export const save  = function ({commit},  payload) {
  axios.post(`${baseApiUrl + defaultPath}/save`, payload)
    .then(res => {
      if (res.data.status == 201) {
        let id = res.data.id
        sessionStorage.setItem(
          "toastMsg",
           `${toastName +' '+ payload.fantasy_name} foi cadastrado com sucesso!`
        );
        commit('SET_ERRORS', '')
        router.push({ path: '/form-people'+'/'+id});
        show({commit}, id)
      } else {
        commit('SET_ERRORS', res.data.errors)
      }
    })
    .catch(e => {
      alert(msgCatchError, e);
    });
}

const update = function({commit}, payload) {
  updateFunction(commit, defaultPath, payload, `${toastName +' '+ payload.fantasy_name}`)
}

const show = function({commit}, payload) {
  showFunction(commit, defaultPath, payload)
}

const cleanErrors = function({commit}){
  commit('SET_ERRORS', '') 
}

const cleanItem = function({commit}){
  commit('SET_FORMDATA', {company: true}) 
}

const setAdressDialog = function({commit}, value){
  commit('SET_ADRESSDIALOG', value) 
}


export default{
    setList,
    save, 
    cleanErrors,
    update,
    show,
    cleanItem,
    setAdressDialog
}