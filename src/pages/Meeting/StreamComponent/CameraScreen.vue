<template>
  <a-row class="video-row camera-screen">
    <div class="video">
      <video
        width="210px"
        height="140px"
        :srcObject.prop="videoUser"
        autoplay
      ></video>
    </div>
    <div v-for="(client, id) in listClient" :key="id" class="video img-only">
      <video
        v-if="client.stream"
        width="210px"
        height="140px"
        :srcObject.prop="client.stream"
        autoplay
      ></video>
      <div v-else>
        <a-avatar icon="user" :size="60"></a-avatar>
        <p class="username">{{ client.username }}</p>
      </div>
    </div>
  </a-row>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      listClient: (state) => state.meeting.listClient,
      videoUser: (state) => state.meeting.videoUser,
    }),
  },
//   watch: {
//     videoUser: (value) => {
//       return value;
//     },
//     listClient: (value) => {
//       console.log("render");
//       return value;
//     },
//   },
};
</script>
<style scoped>
.video-row {
  display: flex;
  overflow-x: scroll;
  /* width: 1vw; */
}
.video {
  margin: 5px 5px 0 5px;
  background: #fff;
  border: 1px;
  border-radius: 3px;
  height: 140px;
  width: 210px;
}
.img-only {
  padding: 35px 75px 40px 75px;
}
.username {
  position: relative;
  z-index: 5;
  bottom: 0;
  margin: 0;
  /* right: 0; */
}
</style>