<template>
  <div class="gate-form">
    <a-card title="Đăng nhập" class="form-sigin-card" style="width: 400px">
      <div class="logo-header">
        <img id="logo" src="pmt_logo.png" />
      </div>
      <a-form
        :form="form"
        layout="vertical"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item label="Tên người dùng">
          <a-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: 'Vui lòng nhập username' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="Mật khẩu">
          <a-input-password
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: 'Vui lòng nhập mật khẩu' }],
              },
            ]"
          />
        </a-form-item>
        <div class="form-button">
          <router-link :to="'/signup'"> 
            <a class="login-form-forgot"> Tạo tài khoản </a>
          </router-link>
          <a-button :loading="loading" type="primary" html-type="submit"> Đăng nhập </a-button>
        </div>
        <a-alert v-for="(err, index) in errorList" :key="index"
          style="margin-top: 12px"
          :message="err.content"
          type="error"
          show-icon
        />
      </a-form>
    </a-card>
  </div>
</template>

<script>
import {mapState, } from 'vuex'
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  computed: mapState({
    errorList: state => state.auth.errorList,
     loading: state => state.auth.loading
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('auth/signin', values)
          // console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>
<style scoped>
.form-sigin-card {
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
}
.logo-header {
  display: flex;
  justify-content: center;
}
.form-button {
  display: flex;
  justify-content: space-between;
  padding: 8px 4px 0 4px;
}
.login-form {
  padding: 0px 32px 32px 32px;
}
</style>