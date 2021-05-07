<template>
  <a-card hoverable style="width: 300px; margin-bottom: 1.5em">
    <img
      slot="cover"
      alt="example"
      src="group_img.png"
    />
    <template slot="actions" class="ant-card-actions">
      <a-tooltip
        v-if="group.owner.username === username"
        placement="bottomLeft"
      >
        <template slot="title">
          <span>Chỉnh sửa</span>
        </template>
        <a-icon key="edit" type="edit" @click="editGroup" />
      </a-tooltip>
      <a-tooltip v-else placement="bottomLeft">
        <template slot="title">
          <span>Thêm thành viên</span>
        </template>
        <a-icon type="plus-circle" @click="editGroup" />
      </a-tooltip>
      <a-tooltip placement="bottomLeft">
        <template slot="title">
          <span>Truy cập</span>
        </template>
        <a-icon type="forward" @click="gotoMeeting" />
      </a-tooltip>
      <a-tooltip
        v-if="group.owner.username === username"
        placement="bottomLeft"
      >
        <template slot="title">
          <span>Xóa nhóm</span>
        </template>
        <a-icon key="setting" @click="deleteGroup" type="delete" />
      </a-tooltip>
      <a-tooltip v-else placement="bottomLeft">
        <template slot="title">
          <span>Rời nhóm</span>
        </template>
        <a-icon type="logout" @click="leaveGroup" />
      </a-tooltip>
    </template>
    <a-card-meta :title="group.name" style="text-align: center"> </a-card-meta>
  </a-card>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["group"],
  data() {
    return {
      username: localStorage.username,
    };
  },
  methods: {
    editGroup() {
      this.$store.dispatch("group/fetchOneGroupForEdit", this.group?._id);
      this.$store.commit("group/setVisibleModal", true);
    },
    gotoMeeting() {
      this.$router.push("group/" + this.group._id).catch((err) => {});
    },
    deleteGroup() {
      this.$emit("open-confirm-dialog", {
        confirmText: "Bạn có chắc muốn xóa nhóm " + this.group.name,
        group: this.group,
        action: "group/deleteGroup",
      });
      // this.$store.dispatch("group/deleteGroup", this.group?._id);
    },
    leaveGroup() {
      this.$emit("open-confirm-dialog", {
        confirmText: "Bạn có chắc muốn rời nhóm " + this.group.name,
        group: this.group,
        action: "group/leaveGGroup",
      });
      // this.$store.dispatch("group/leaveGGroup", this.group?._id);
    },
  },
};
</script>