<template>
  <div style="padding: 0 10px 0 10px">
    <edit-group />
    <join-group />

    <hr style="margin: 0; opacity: 50%" />
    <a-spin :spinning="spinning" style="margin-top: 56px" tip="Đang tải...">
      <div style="max-height: 600px; overflow-y: auto">
        <a-row
          style="padding: 16px"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <group-card
            v-for="(group, id) in listGroup"
            :key="id"
            :group="group"
          />
        </a-row>
      </div>
    </a-spin>
  </div>
</template>

<script>
import { mapState } from "vuex";
import EditGroup from "../components/Modal/EditGroup.vue";
import GroupCard from "./AllGroup/GroupCard.vue";
import JoinGroup from "./AllGroup/JoinGroup.vue";
export default {
  components: { GroupCard, JoinGroup, EditGroup },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      spinning: (state) => state.group.spinning ,
      listGroup: (state) => state.group.listGroup,
    }),
  },
  created() {
    this.$store.dispatch("group/fetchAllGroup");
  },
  methods: {},
};
</script>