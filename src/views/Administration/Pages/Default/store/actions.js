import axios from 'axios'
import { baseApiUrl } from "@/global";
const defaultPath = '/people'

const setList = ({ commit }) => {   
        axios.post(`${baseApiUrl+defaultPath}/index`).then(res => {
           commit('SET_LIST',res.data)       
           })
} 

export default{
    setList
}