
const defaultPath = '/people'
const toastName = 'O Cliente'
import {indexFunction, saveFunction, updateFunction, showFunction} from "@/utils/DefaultCrud/defaultsFunctions";

const setList = ({ commit }) => {     
  indexFunction(commit, defaultPath)
} 

const save = function({commit}, payload) {
  saveFunction(commit, defaultPath, payload, `${toastName +' '+ payload.fantasy_name}`)
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


export default{
    setList,
    save, 
    cleanErrors,
    update,
    show,
    cleanItem,
}