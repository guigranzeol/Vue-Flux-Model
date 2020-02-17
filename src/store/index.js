import Vue from 'vue'
import Vuex from 'vuex'

import People from '@/views/Administration/Pages/People/store'
import User from '@/views/Administration/Pages/User/store'
import Default from '@/views/Administration/Pages/Default/store'
import Adress from '@/views/Administration/Pages/People/components/Adress/store'


Vue.use(Vuex)

const modules = {
    People,
    User,
    Default,
    Adress
}

export default new Vuex.Store({
    modules
})