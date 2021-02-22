<template>
  <div>
    <a-row
      type="flex"
      justify="space-around"
      align="middle"
      class="share-screen"
    >
      <share-screen />
    </a-row>
    <camera-screen class="" />
  </div>
</template>
<script>
import CameraScreen from "./StreamComponent/CameraScreen.vue";
import ShareScreen from "./StreamComponent/ShareScreen.vue";
export default {
  components: { ShareScreen, CameraScreen },
};
</script>
<style scoped>
.share-screen {
  background: black;
  height: calc(100vh   - 170px);
  height: -webkit-calc(100vh   - 170px);
  height: -moz-calc(100vh   - 170px);
  height: -o-calc(100vh   - 170px);
  height: expression(100vh   - 170px);
}
.camera-screen {
  height: 170px;
}
</style>