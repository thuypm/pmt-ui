import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import Unicon from 'vue-unicons'
import {
  uniVideo, uniVideoSlash,
  uniMicrophone, uniMicrophoneSlash,
  uniDesktop, uniDesktopSlash,
  uniComments, uniUsersAlt, uniPhone,
  uniCommentsAlt, uniCornerUpLeftAlt
} from 'vue-unicons/src/icons'

Unicon.add([
  uniVideo, uniVideoSlash,
  uniMicrophone, uniMicrophoneSlash,
  uniDesktop, uniDesktopSlash,
  uniComments, uniUsersAlt,
  uniCornerUpLeftAlt,
  uniPhone, uniCommentsAlt
  , uniUsersAlt
])

Vue.config.productionTip = false;
Vue.use(Unicon)
Vue.use(Antd)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
