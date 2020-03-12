const defaultPath = '/'
const toastName = ''
const listDefault = {}

import { saveFunction, indexFunction } from "@/utils/DefaultCrud/defaultsFunctions";

export const save = function ({ commit }, payload) {
    saveFunction(commit, defaultPath, payload, `${toastName + payload.name}`, 'full')
}

const update = function ({ commit }, payload) {
    updateFunction(commit, defaultPath, payload, `${toastName + ' ' + payload.fantasy_name}`, 'full')
}

const show = function ({ commit }, payload) {
    showFunction(commit, defaultPath, payload, 'full')
}

const setList = ({ commit }) => {
    indexFunction(commit, defaultPath, null, 'full')
}

const cleanItem = function ({ commit }) {
    commit('SET_FORMDATA', listDefault)
}

const cleanErrors = function ({ commit }) {
    commit('SET_ERRORS', '')
}


export default {
    save,
    cleanItem,
    cleanErrors,
    setList,
    update,
    show
}