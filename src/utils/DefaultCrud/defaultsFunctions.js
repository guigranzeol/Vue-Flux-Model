import axios from 'axios'
import { baseApiUrl, catchError } from "@/global";
import router from '@/router/index'

export const indexFunction = function (commit, defaultPath, payload) {
  axios.post(`${baseApiUrl + defaultPath}/index`, payload).then(res => {
    commit('SET_LIST', res.data)
  })
  .catch(e => {
    catchError(e)
  });
}


export const saveFunction = function (commit, defaultPath, payload, toast) {
  axios.post(`${baseApiUrl + defaultPath}/save`, payload)
    .then(res => {
      if (res.data == 201) {
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
    });
}


export const updateFunction = function (commit, defaultPath, payload, toast) {
  axios
    .post(`${baseApiUrl + defaultPath}/update`, payload)
    .then(res => {
      if (res.data == 202) {
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
    });
}

export const showFunction = function (commit, defaultPath, id) {
  axios
    .post(`${baseApiUrl + defaultPath}/show`, `id = ${id}`)
    .then(res => {
      commit('SET_FORMDATA', res.data[0]);
      return res.data[0]
    })
    .catch(e => {
      catchError(e);
    });
}