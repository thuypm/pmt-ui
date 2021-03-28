
import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './authStore'
import groupStore from './groupStore';
import meetingStore from './meetingStore';
import userStore from './userStore'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: userStore,
        auth: authStore,
        group: groupStore,
        meeting: meetingStore
    }
}) 

export default store;