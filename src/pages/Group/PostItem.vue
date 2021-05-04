<template>
  <div class="post-pane flex">
    <div class="avatar">
      <a-avatar size="large" slot="avatar" :src="item.avatar" />
    </div>
    <div class="post-content">
      <div style="padding-bottom: 16px; margin-bottom: 8px">
        <div class="flex">
          <p class="user-name">{{ item.owner.username }}</p>
          <span class="post-time">
            {{ item.time | shortTime }}
          </span>
        </div>
        <div v-if="item.file_type == 'data:image'" class="msg-content">
          <a :href="hostResoucre + item.filePath" target="_blank">
            <img
              :src="hostResoucre + item.filePath"
              style="max-width: 160px"
              alt
            />
          </a>
        </div>
        <p>{{ item.content }}</p>
      </div>

      <a-list
        v-if="item.list_comment && item.list_comment.length"
        :data-source="item.list_comment"
      >
        <a-list-item class="comment-li" slot="renderItem" slot-scope="cmt">
          <div class="flex">
            <div class="avatar">
              <a-avatar size="small" slot="avatar" :src="cmt.avatar" />
            </div>
            <div>
              <p class="user-name">{{ cmt.owner.username }}</p>
              <p>{{ cmt.content }}</p>
            </div>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import { shortTime } from "../../utils/filters";
export default {
  props: ["item", "listData"],
  data() {
    return {
      hostResoucre: process.env.VUE_APP_HOST_RESOURCE,
    };
  },
  filters: {
    shortTime: shortTime,
  },
};
</script>
<style scoped>
.post-time {
  font-size: 12px;
  line-height: 24px;
  margin-left: 16px;
}
.post-form {
  position: absolute;
  background: rgb(243, 242, 241);
  bottom: 0;
  width: calc(100% - 300px);
  padding: 16px 48px 8px 78px;
}
p {
  margin-bottom: 2px;
}
.comment-li {
  font-size: 14px;
  border: 0 !important;
  padding: 0 !important;
}
input,
textarea {
  position: relative;
  width: 100%;
  padding: 8px 16px 8px 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid #1890ff;
  border-top: 1px solid #e8e8e8;
}

.user-name {
  font-size: 16px;
  font-weight: 500;
}
.post-content {
  background: #fff;
  padding: 8px 16px 8px 16px;
  width: 100%;
  border-radius: 3px 3px 0 0;
  box-shadow: 0px 2px 1px -2px rgba(0, 0, 0, 0.65);
}
.avatar {
  margin-right: 8px;
}
.list-post {
  height: 100vh;
  overflow-y: auto;
  padding: 50px 36px 100px 20px;
  width: calc(100% - 300px);
}
</style>