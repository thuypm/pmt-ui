<template>
  <a-card hoverable style="width: 300px; margin-bottom: 1.5em">
    <img
      slot="cover"
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
    <template slot="actions" class="ant-card-actions">
      <a-icon key="edit" type="edit" @click="editGroup" />
      <a-icon type="forward" />
      <a-icon key="setting" type="setting" />
    </template>
    <a-card-meta :title="group.name" style="text-align: center"> </a-card-meta>
  </a-card>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: ["group"],
  methods:{
    editGroup()
    {
      this.$store.dispatch('group/fetchOneGroupForEdit', this.group?._id)
    }
  }
};
</script>