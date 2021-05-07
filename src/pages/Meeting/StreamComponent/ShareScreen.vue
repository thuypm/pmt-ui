<template>
  <div>
    <img class="img-screen" src="/meeting_icon.gif" />
    <!-- <a-avatar shape="square" :size="64" icon="user" /> -->
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.img-screen {
  /* width:  calc(100% - 300px);  */
  border-radius: 50%;
  width: 200px;
  box-shadow: 0px 0px 20px #1890ff;
  height: 200px;
  object-fit: cover;
}
</style>