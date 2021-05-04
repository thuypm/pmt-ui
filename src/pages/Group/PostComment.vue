<template>
  <div class="list-item-footer">
    <div>
      <input v-model="comment" placeholder="Nhập câu trả lời" />
      <div class="function-btn">
        <a-icon type="enter" />
        Trả lời
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "listData"],
  data() {
    return {
      comment: "",
    };
  },
  methods: {
      submitComment()
      {
          this.$store.dispatch('post/submitComment', this.comment)
      }
  },
};
</script>
