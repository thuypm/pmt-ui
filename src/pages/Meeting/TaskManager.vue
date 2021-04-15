<template>
  <div class="task-manager" :style="{ right: activeTab ? '150px' : '0' }">
    <div class="meeting-function-button">
      <unicon name="video" fill="rgba(0, 0, 0, 0.65)"></unicon>
    </div>
    <div
      :class="{
        'meeting-function-button': true,
        active: camera,
      }"
      @click="() => turnOnDevice(true, false)"
    >
      <unicon
        :name="camera ? 'video' : 'video-slash'"
        fill="rgba(0, 0, 0, 0.65)"
      ></unicon>
    </div>
    <div
      :class="{
        'meeting-function-button': true,
        active: microphone,
      }"
       @click="() => turnOnDevice(false, true)"
    >
      <unicon
        :name="microphone ? 'microphone' : 'microphone-slash'"
        fill="rgba(0, 0, 0, 0.65)"
      ></unicon>
    </div>
    <div class="meeting-function-button">
      <unicon name="desktop" fill="rgba(0, 0, 0, 0.65)"></unicon>
    </div>
    <div
      :class="{
        'meeting-function-button': true,
        active: activeTab === 'CHAT_TAB',
      }"
      @click="(e) => changeCurrentTab('CHAT_TAB')"
    >
      <unicon name="comments-alt" fill="rgba(0, 0, 0, 0.65)"></unicon>
    </div>
    <div
      :class="{
        'meeting-function-button': true,
        active: activeTab === 'LIST_USER',
      }"
      @click="(e) => changeCurrentTab('LIST_USER')"
    >
      <unicon name="users-alt" fill="rgba(0, 0, 0, 0.65)"></unicon>
    </div>
    <div class="meeting-function-button" style="background: red">
      <unicon name="phone" fill="white"></unicon>
    </div>
    <div></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      activeTab: null,
      // camera: false,
      // microphone: false,
    };
  },
  computed:{
    ...mapState({
      camera: state => state.meeting.mediaDevice.camera,
      microphone: state => state.meeting.mediaDevice.micro,
    })
  },
  methods: {
    turnOnDevice(editCamera, editMicro) {
      if (editCamera)
        this.$store.commit("meeting/setMediaDevice", {
          camera: !this.$store.state.meeting.mediaDevice.camera,
          micro: this.$store.state.meeting.mediaDevice.micro,
        });
      if (editMicro)
        this.$store.commit("meeting/setMediaDevice", {
          camera: this.$store.state.meeting.mediaDevice.camera,
          micro: !this.$store.state.meeting.mediaDevice.micro,
        });
    },
    changeCurrentTab(tab) {
      if (this.activeTab === tab) this.activeTab = null;
      else this.activeTab = tab;
      this.$emit("show-right-tab", tab);
    },
  },
};
</script>
<style scoped>
.meeting-function-button {
  background: #fff;
  padding: 6px 24px;
  /* font-size: 16px; */
}
.active {
  background: #ccc;
}
.meeting-function-button:hover {
  cursor: pointer;
  background: #ccc;
}

.task-manager {
  font-size: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 200px;
  /* top: calc(100vh - 170px - 66px); */
  /* right: 150px; */
  z-index: 15;
}
</style>