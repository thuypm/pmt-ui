import { postRequest, getRequest } from "../services/api";
import router from '../router/index'


export default {
    namespaced: true,
    state: {
        visibleModal: true,
        listSearchResultUser: [],
        errorList: [],
        formData: {
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
        setLoading(state, value) {
            state.loading = value
        },
        setlistSearchResultUser(state, value) {
            state.listSearchResultUser = value
        }
    },
    actions: {
        async findUser({ commit, }, data) {
            if (data?.username.trim().length) {
                let response = await getRequest('user/find-user', data).catch(err => {
                    commit('setLoading', false)
                })
                if (response) {
                    commit('setLoading', false);
                    commit('setlistSearchResultUser', response);
                }
            }
            else
            {
                commit('setlistSearchResultUser', []);
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
