<template>
  <a-modal v-model="visible" title="Vertically centered modal dialog" centered>
    <a-form>
      <a-form-item label="Tên nhóm">
        <a-input type="text"></a-input>
      </a-form-item>
      <a-form-item label="Thêm thành viên">
        <a-input type="text"></a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  props: ["visible"],
};
</script>