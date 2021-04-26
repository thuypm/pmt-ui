<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#App{
}
.flex{
  display: flex;
}
.justifi-space-beetwen{
  justify-content: space-between;
}
.justifi-space-around{
  justify-content: space-around;
}
</style>
