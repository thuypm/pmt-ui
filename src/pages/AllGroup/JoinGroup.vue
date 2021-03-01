<template>
  <div class="join-pane">
    <group-modal />
    <div class="join-tilte">
      <b style="line-height: 40px">Nhóm của bạn</b>
    </div>
    <div class="join-function">
      <a-form layout="inline">
        <a-form-item class="join-item-pane" label="Nhập code nhóm">
          <span>
            <a-input type="text" />
          </span>
        </a-form-item>
        <a-form-item class="join-item-pane">
          <a-button type="primary" html-type="submit"> Tham gia </a-button>
        </a-form-item>
        <a-form-item class="join-item-pane">
          <a-button type="button" @click="() => setVisibleModal(true)"
            ><a-icon type="plus-circle" />Tạo nhóm mới</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import GroupModal from "./GroupModal.vue";
export default {
  components: { GroupModal },
  data() {
    return {};
  },

  methods: {
    ...mapMutations({
      setVisibleModal: 'group/setVisibleModal',
    })
  },
};
</script>
<style scoped>
.join-pane {
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.join-title {
  line-height: 40px;
}
.join-function {
  display: flex;
  justify-content: flex-end;
}
.join-item-pane {
  margin-right: 16px !important;
}
</style>