import { postRequest, getRequest } from "../services/api";
import router from '../router/index'


export default {
    namespaced: true,
    state: {
        loading: false,
        spinning: false,
        visibleModal: false,
        listSearchResultUser: [],
        listGroup: [],
        errorList: [],
        formData: {
            name: 'vip',
            description: 'abc',
            members: [],
            owner: ''
        }
    },
    mutations: {
        setVisibleModal(state, value) {
            state.visibleModal = value;
        },
        setSpinning(state, value) {
            state.spinning = value
        },
        setLoading(state, value) {
            state.loading = value
        },
        setFormData(state, value) {
            state.formData = value
        },
        setListGroup(state, value) {
            state.listGroup = value;
        },
        setlistSearchResultUser(state, value) {
            state.listSearchResultUser = value
        },
        addUser(state, { member, index }) {
            state.formData.members.push(member);
            state.listSearchResultUser[index].checked = true;
        },
        setFormField(state, data) {
            state.formData = {
                ...state.formData,
                ...data
            }
        },
        removeUser(state, { member, }) {
            state.formData.members = state.formData.members.filter(e => e.username !== member.username);
            let searchUserResult = state.listSearchResultUser.find(e => e.username === member.username);
            if (searchUserResult)
                searchUserResult.checked = false;
        }
    },
    actions: {
        async fetchOneGroupForEdit({ commit, state }, id){
            let response = await getRequest('group/'+ id).catch(err => {
                commit('setSpinning', false);
            })  
            if(response)
            {
                console.log(response);
                commit('setSpinning', false);
                commit('setFormData', response);
                commit('setVisibleModal', true);
            }
        },
        async fetchAllGroup({ commit, state }) {
            let response = await getRequest('group').catch(err => {
                commit('setSpinning', false);
            })
            if (response) {
                commit('setSpinning', false);
                commit('setListGroup', response);
            }
        },

        async findUser({ commit, state }, data) {
            if (data?.username?.trim()?.length) {
                let response = await getRequest('user/find-user', data).catch(err => {
                    commit('setLoading', false)
                })
                if (response) {
                    commit('setLoading', false);
                    let userData = response.map(e => {
                        return {
                            ...e,
                            checked: state.formData.members.findIndex(el => el.username === e.username) !== -1
                        }
                    })
                    commit('setlistSearchResultUser', userData);
                }
            }
            else {
                commit('setlistSearchResultUser',);
            }
        },
        async submit({ commit, dispatch, state }) {
            let result = await postRequest('group', state.formData)
                .catch(err => {
                    this._vm.$message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
                    commit('setLoading', false)
                })
            if (result) {
                commit('setLoading', false);
                commit('setVisibleModal', false);
                dispatch('fetchAllGroup');
                this._vm.$message.success("Thành công");
            }
        }
    }
}
