<template>
  <div>
    <a-modal :visible="visibleModal" :title="formData.title" @cancel="handleClose">
      <template slot="footer">
        <a-button key="back" @click="handleClose"> Hủy </a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
        >
          Xác nhận
        </a-button>
      </template>
      <a-form :form="form">
        <a-form-item label="Tên nhóm">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: 'Hãy nhập tên nhóm' }],
              },
            ]"
            aria-placeholder="vip"
          ></a-input>
        </a-form-item>
        <a-form-item label="Mô tả">
          <a-textarea
            v-decorator="[
              'description',
              {
                rules: [{ required: true, message: 'Hãy nhập mô tả của nhóm' }],
              },
            ]"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="Thành viên">
          <a-tag class="list-member-item">
            <a-icon style="color: green" type="check-circle" /> Bạn(Chủ sở hữu)
          </a-tag>
          <a-tag
            v-for="(member, index) in formData.members"
            :key="index"
            class="list-member-item"
            :closable="true"
            @close="() => handleAddOrRemoveUser(member)"
          >
            {{ member.username }}
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
                  @click="() => handleAddOrRemoveUser(member, index)"
                >
                  <a-avatar icon="user" /> {{ member.username }}
                  <a-icon
                    v-if="member.checked"
                    style="color: green; float: right; margin-top: 6px"
                    type="check"
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
import { mapState } from "vuex";
let timeout;
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.group.loading,
      visibleModal: (state) => state.group.visibleModal,
      formData: (state) => state.group.formData,
      listSearchResultUser: (state) => state.group.listSearchResultUser,
    }),
  },
  watch: {
    // formData(value) {
    //   this.form.setFieldsValue(...value);
    // },
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        return {
          name: this.$form.createFormField({
            value: this.$store.state.group?.formData?.name,
          }),
          description: this.$form.createFormField({
            value: this.$store.state.group?.formData?.description,
          }),
        };
      },
      onValuesChange: (_, values) => {
        this.$store.commit("group/setFormField", values);
      },
    });
  },
  methods: {
    handleAddOrRemoveUser(member, index) {
      if (!member?.checked)
        this.$store.commit("group/addUser", { member, index });
      else this.$store.commit("group/removeUser", { member });
    },
    handleClose() {
      this.$store.commit("group/setFormData", {});
      this.$store.commit("group/setVisibleModal", false);
    },
    findUser({ target: { value } }) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (value) this.$store.dispatch("group/findUser", { username: value });
      }, 700);
    },
    handleOk(e) {
      this.$store.dispatch("group/submit");
    },
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