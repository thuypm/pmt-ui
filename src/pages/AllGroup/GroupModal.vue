<template>
  <div>
    <a-modal
      :visible="visibleModal"
      :title="formData.title"
      @ok="handleOk"
      @cancel="handleClose"
    >
      <a-form>
        <a-form-item label="Tên nhóm">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: 'Username is required!' }],
              },
            ]"
            aria-placeholder="vip"
          ></a-input>
        </a-form-item>
        <a-form-item label="Mô tả">
          <a-textarea
            v-decorator="[
              'descripttion',
              {
                rules: [{ required: true, message: 'Username is required!' }],
              },
            ]"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="Thành viên">
          <a-tag class="list-member-item" @close="() => handleDelete()">
            <a-icon style="color: green" type="check-circle" /> Bạn(Chủ sở hữu)
          </a-tag>
          <a-tag
            v-for="(member, index) in formData.members"
            :key="index"
            class="list-member-item"
            :closable="true"
            @close="() => handleDelete()"
          >
            {{ member }}
          </a-tag>
        </a-form-item>
        <a-form-item label="Thêm thành viên">
          <a-popover
            :visible="listSearchResultUser.length !== 0 && visibleModal"
            title="Kết quả tìm kiếm"
            placement="bottomLeft"
          >
            <template slot="content">
              <div class="list-user-result">
                <div
                  v-for="(member, index) in listSearchResultUser"
                  :key="index"
                  class="list-user-result-item"
                  @close="() => handleDelete()"
                >
                  <a-avatar icon="user" /> {{ member.username }}
                  <a-icon
                    style="color: green; float: right; margin-top: 6px"
                    type="plus"
                  />
                </div>
              </div>
            </template>
            <a-input
              aria-placeholder="Thêm thành viên"
              @change="findUser"
            ></a-input>
          </a-popover>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
let timeout;
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapState({
      visibleModal: (state) => state.group.visibleModal,
      formData: (state) => state.group.formData,
      listSearchResultUser: (state) => state.group.listSearchResultUser,
    }),
  },
  watch: {
    formData(value) {
      this.form.setFieldsValue(...value);
    },
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            name: this.name,
          }),
        };
      },
      onValuesChange: (_, values) => {
        console.log(values);
        // Synchronize to vuex store in real time
        // this.$store.commit('update', values)
      },
    });
  },
  methods: {
    handleClose() {
      this.$store.commit("group/setVisibleModal", false);
    },
    findUser({ target: { value } }) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.$store.dispatch("group/findUser", {username: value});
      }, 700);
    },
    handleDelete() {},
    handleOk(e) {},
  },
};
</script>
<style scoped>
.list-user-result {
  max-height: 120px;
  overflow-y: scroll;
}
.list-user-result-item {
  border: 0;
  padding: 6px 4px;
  border-radius: 2px;
}
.list-user-result-item:hover {
  cursor: pointer;
  background: #c6f2fb;
}
.list-member-item.ant-tag {
  font-size: 14px !important;
  border-radius: 2px;
  margin-right: 8px;
  padding: 4px 6px;
}
</style>