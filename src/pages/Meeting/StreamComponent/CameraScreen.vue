<template>
        <a-row class="video-row camera-screen" >
          <div class="video img-only">
              <a-avatar icon="user" :size="60"></a-avatar>
              <p class="username">Username</p>
          </div>
            <div class="video img-only">
              <a-avatar icon="user" :size="60"></a-avatar>
              <p class="username">Username</p>
          </div>
            <div class="video img-only">
              <a-avatar icon="user" :size="60"></a-avatar>
              <p class="username">Username</p>
          </div>
            <div class="video img-only">
              <a-avatar icon="user" :size="60"></a-avatar>
              <p class="username">Username</p>
          </div>
            <div class="video img-only">
              <a-avatar icon="user" :size="60"></a-avatar>
              <p class="username">Username</p>
          </div>
           <div class="video img-only">
              <a-avatar icon="user" :size="60"></a-avatar>
              <p class="username">Username</p>
          </div>
        </a-row>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.video-row{
    display: flex;
    overflow-x:scroll;
    /* width: 1vw; */
}
.video{
    margin: 5px 5px 0 5px ;
    background: #fff;
    border: 1px;
    border-radius: 3px;
    height: 140px;
    width: 210px;
}
.img-only{
    padding: 35px 75px 40px 75px
}
.username{
    position: relative;
    z-index: 5;
    bottom:0;
    margin:0;
    /* right: 0; */
}


</style>