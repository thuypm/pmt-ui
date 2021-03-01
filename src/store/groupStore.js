import { postRequest } from "../services/api";
import router from '../router/index'

export default {
    namespaced: true,
    state: {
        visibleModal: true,
        listSearchResultUser: ['thuypm','thuypm','thuypm','fhsao'],
        errorList: [],
        formData:{
            title: 'vip',
            description: 'abc',
            members: [],
            owner: ''
        }
    },
    mutations: {
        setVisibleModal(state, value) {
            state.visibleModal = value;
        },
        setLoading(state, value){
            state.loading = value
        }
    },
    actions: {
        async findUser({ commit, }, data) {
            let response = await getRequest('user/findUser', data).catch(err => {
                commit('setLoading', false)
            })
            if (response) { 
                commit('setLoading', false);
                commit(listSearchResultUser, data);
            }
        },
        async signup({ commit, }, data) {
            commit('setLoading', true)
            let response = await postRequest('auth/signup', data).catch(err => {
                commit('setErrorList', err.errors);
                commit('setLoading', false);
            })
            if (response) {
                commit('setLoading', false);
                commit('setErrorList', []);
                this._vm.$message.success("Thành công! Bây giờ hãy đăng nhập");
                router.replace('/signin')
            }

        }
    }
}
