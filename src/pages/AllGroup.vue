<template>
  <div style="padding: 0 10px 0 10px">
    <edit-group :visible="false" />
    <join-group />
    <hr style="margin: 0; opacity: 50%" />
    <div style="max-height: 600px; overflow-y: auto">
      <a-row
        style="padding: 16px"
        type="flex"
        justify="space-around"
        align="middle"
      >
        <group-card />
        <group-card />
        <group-card />
        <group-card />
      </a-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EditGroup from "../components/Modal/EditGroup.vue";
import GroupCard from "./AllGroup/GroupCard.vue";
import JoinGroup from "./AllGroup/JoinGroup.vue";
export default {
  components: { GroupCard, JoinGroup, EditGroup },
  data() {
    return {};
  },
  computed:{
    ...mapState({
      
    })
 },
  methods: {},
};
</script>