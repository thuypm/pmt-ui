<template>
  <a-card hoverable style="width: 300px; margin-bottom: 1.5em">
    <img
      slot="cover"
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
    <template slot="actions" class="ant-card-actions">
      <a-icon key="edit" type="edit" @click="editGroup" v-if="group.owner.username === username" />
       <a-icon type="plus-circle" @click="editGroup" v-else/>
      <a-icon type="forward" @click="gotoMeeting"/>
      <a-icon key="setting" type="setting" />
    </template>
    <a-card-meta :title="group.name" style="text-align: center"> </a-card-meta>
  </a-card>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: ["group"],
  data(){
    return {
      username: localStorage.username
    }
    
  },
  methods:{
    editGroup()
    {
      this.$store.dispatch('group/fetchOneGroupForEdit', this.group?._id);
      this.$store.commit('group/setVisibleModal', true);
    },
    gotoMeeting(){
      this.$router.push("group/" + this.group._id)
    }
  }
};
</script>