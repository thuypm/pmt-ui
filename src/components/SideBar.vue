<template>
  <a-layout-sider v-model="collapsed" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['3']">
      <a-menu-item key="1">
        <router-link :to="'/notification'">
          <a-badge v-show="haveNewNotice" class="dot-vip" dot></a-badge>
          <a-icon type="bell" />
          <span>Thông báo</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link :to="'/meeting'">
          <a-icon type="wechat" />
          <span>Chat</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link :to="'/all-group'">
          <a-icon type="team" />
          <span>Nhóm</span>
        </router-link>
      </a-menu-item>
      <a-menu-item style="">
        <router-link :to="'/group-exercise'">
          <a-icon type="experiment" />
          <span>Bài tập</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <div />
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex';
export default {
  // props: ["collapsed"],
  data() {
    return {
      collapsed: true,
    };
  },
  created(){
    this.$noti.socket.emit("get-status-notice");
      this.$noti.socket.on("res-status-notice", (data)=>{

      });
      this.$noti.socket.on("read-all-notice", ()=>{
        this.$store.commit('noti/setHaveNewNotice', false);
      })
  },
  computed:{
    ...mapState({
      haveNewNotice: state=> state.noti.haveNewNotice
    })
  },
  methods: {
    // toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    // },
  },
};
</script>
<style scoped>
.dot-vip {
  position: absolute;
  top: 10px;
  left: 40px;
}
</style>
