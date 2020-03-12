import Vue from 'vue'
import Vuex from 'vuex'

import Spinner from '@/Layouts/Components/store'
import People from '@/views/Administration/Pages/People/store'
import User from '@/views/Administration/Pages/User/store'
import Adress from '@/views/Administration/Pages/People/components/Adress/store'
import Phone from '@/views/Administration/Pages/People/components/Phones/store'

Vue.use(Vuex)

const modules = {
    Spinner,
    People,
    User,
    Adress,
    Phone
}

export default new Vuex.Store({
    modules
})