import { postRequest, getRequest } from "../services/api";
import router from '../router/index'

const defaultData = {
    name: '',
    description: '',
    members: [],
    owner: ''
}

export default {
    namespaced: true,
    state: {
        videoUser: null,
        spinning: false,
        visibleModal: false,
        mediaDevice: {
            camera: false,
            micro: false
        },
        listClient: [],
        peer: [],
    },
    mutations: {
        setVideoUser(state, videoObject) {
            state.videoUser = videoObject;
        },
        setMediaDevice(state, value) {
            state.mediaDevice = value
        },
        setSpinning(state, value) {
            state.spinning = value
        },
        setLoading(state, value) {
            state.loading = value
        },
        sliceClient(state, value) {
            state.listClient.splice(value, 1);
        },
        pushNewClient(state, value) {
            state.listClient.push(value);
        },
        clearConnection(state, value) {
            state.listClient = [];
        }

    },
    actions: {
        addClient({ commit, state }, data) {
            commit("pushNewClient", data);
            let vt = state.listClient.findIndex(e => e.socketId === data.socketId);
            let peerMap = state.listClient.find(e => e.socketId === data.socketId);
            if (peerMap) {
                peerMap.peerObject.on("error", err => {
                    peerMap.peerObject.destroy()
                    // commit("sliceClient", vt);
                });
                peerMap.peerObject.on("close", err => {
                    commit("sliceClient", vt);
                });
            }
        },
        signalAnswerToken({ commit, state }, data) {
            let peerMap = state.listClient.find(e => e.socketId === data.socketId);
            if (peerMap) {
                peerMap.peerObject.signal(data.token);
            }
        },
        startVideoCall({ commit, state }, data) {
            commit("setVideoUser", data)
            state.listClient.forEach(element => {
                element.peerObject.addStream(data);
            });
        },
        destroyAllConnection({ commit, state }, data) {
            state.listClient.forEach(element => {
                element.peerObject.destroy()
            });
            // commit("clearConnection");
        },
    }
}
