<template>
  <div class="task-manager">
    <div>
      <a-radio-group size="large">
         <a-radio-button value="time" disabled>
          <span>29:12</span>
        </a-radio-button>
        <a-radio-button value="video">
          <unicon name="video" fill="rgba(0, 0, 0, 0.65)"></unicon>
        </a-radio-button>
        <a-radio-button value="microphone">
          <unicon name="microphone" fill="rgba(0, 0, 0, 0.65)"></unicon>
        </a-radio-button>
        <a-radio-button value="desktop">
          <unicon name="desktop" fill="rgba(0, 0, 0, 0.65)"></unicon>
        </a-radio-button>
        <a-radio-button value="comments" @click="(e)=> $emit('show-right-tab','CHAT_TAB')">
          <unicon name="comments-alt" fill="rgba(0, 0, 0, 0.65)"></unicon>
        </a-radio-button>
        <a-radio-button value="users" @click="(e)=> $emit('show-right-tab','LIST_USER')">
          <unicon name="users-alt" fill="rgba(0, 0, 0, 0.65)"></unicon>
        </a-radio-button>
        <a-radio-button value="phone" style="background: red">
          <unicon name="phone" fill="rgba(0, 0, 0, 0.65)"></unicon>
        </a-radio-button>
      </a-radio-group>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.ant-radio-button-wrapper {
  height: 100% !important;
}
.unicon {
  padding: 10px 10px 5px 10px;
}
.task-manager {
  font-size: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: calc(100vh - 170px - 66px);
  right: 150px;
  z-index: 15;
}
</style>