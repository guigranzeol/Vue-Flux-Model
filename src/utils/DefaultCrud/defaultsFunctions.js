import axios from 'axios'
import { baseApiUrl, catchError } from "@/global";
import router from '@/router/index'
import { spinnerChoice } from '@/utils/DefaultCrud/spinnerRules'

export const indexFunction = function (commit, defaultPath, payload, spinner) {
  spinnerChoice(spinner, true)

  axios.post(`${baseApiUrl + defaultPath}/index`, payload).then(res => {
    commit('SET_LIST', res.data)
  })
  .catch(e => {
    catchError(e)
  })

  .finally(() => { 
    spinnerChoice(spinner, false)
  })
 
}


export const saveFunction = function (commit, defaultPath, payload, toast, spinner) {

  spinnerChoice(spinner, true)

  axios.post(`${baseApiUrl + defaultPath}/save`, payload)
    .then(res => {
      if (res.data.status == 201) {
        sessionStorage.setItem(
          "toastMsg",
          ` ${toast} foi cadastrado com sucesso!`
        );
        router.push({ path: defaultPath });
      } else {
        commit('SET_ERRORS', res.data.errors)
      }
    })
    .catch(e => {
      catchError(e)
    })
    .finally(() => { 

      spinnerChoice(spinner, false)

    })
}


export const updateFunction = function (commit, defaultPath, payload, toast, spinner) {

  spinnerChoice(spinner, true) 

  axios
    .post(`${baseApiUrl + defaultPath}/update`, payload)
    .then(res => {
      if (res.data.status == 202) {
        sessionStorage.setItem(
          "toastMsg",
          `${toast} foi atualizado com sucesso!`
        );
        router.push({ path: defaultPath });
      } else {
        commit('SET_ERRORS', res.data.errors)
      }
    })
    .catch(e => {
      catchError(e);
    })
    .finally(() => { 

      spinnerChoice(spinner, false)

    })
}

export const showFunction = function (commit, defaultPath, id, spinner) {

  spinnerChoice(spinner, true)

  axios
    .post(`${baseApiUrl + defaultPath}/show`, `id = ${id}`)
    .then(res => {
      commit('SET_FORMDATA', res.data[0]);
      return res.data[0]
    })
    .catch(e => {
      catchError(e);
    })
    .finally(() => { 

      spinnerChoice(spinner, false)
      
    })
}
