<template>
  <a-layout-sider v-model="collapsed" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['3']">
      <a-menu-item key="1">
        <router-link :to="'/notification'">
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
      <a-menu-item key="4">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="5">
        <router-link :to="'/group'">
          <a-icon type="experiment" />
        </router-link>
        <span>Bài tập</span>
      </a-menu-item>
      <a-menu-item style="">
        <router-link :to="'/exercise'">
          <a-icon type="experiment" />
        </router-link>
        <span>Bài tập</span>
      </a-menu-item>
    </a-menu>
    <div />
  </a-layout-sider>
</template>

<script>
export default {
  props: ["collapsed"],
  data() {
    return {};
  },
  methods: {
    // toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    // },
  },
};
</script>
<style scoped>
</style>
