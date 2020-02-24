const defaultPath = '/users'
const toastName = 'O Usuario'
const listDefault = {
    id: null,
    name: null,
    email: null,
    admin: false,
    user_type: 0,
    created_at: null,
    updated_at: null,
    people_id: null
}

import { saveFunction, indexFunction, updateFunction, showFunction } from "@/utils/DefaultCrud/defaultsFunctions";

const setList = ({ commit }) => {    
    indexFunction(commit, defaultPath, null, 'full')   
  } 

export const save = function ({ commit }, payload) {
    saveFunction(commit, defaultPath, payload, `${toastName + payload.name}` , 'full')
}

const update = function ({ commit }, payload) {
  updateFunction(commit, defaultPath, payload, `${toastName + ' ' + payload.name}`, 'full')
}

const show = function ({ commit }, payload) {
  showFunction(commit, defaultPath, payload, 'full')
}

const cleanItem = function({commit}){  
    commit('SET_FORMDATA', listDefault) 
  }
  
const cleanErrors = function({commit}){
    commit('SET_ERRORS', '') 
  }

export default {
    show, 
    update,
    save,
    cleanItem,
    cleanErrors,
    setList
}