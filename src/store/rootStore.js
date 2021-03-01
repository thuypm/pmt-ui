
import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './authStore'
import groupStore from './groupStore';
import userStore from './userStore'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: userStore,
        auth: authStore,
        group: groupStore
    }
}) 

export default store;