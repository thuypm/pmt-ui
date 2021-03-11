 
<template>
  <div>
    <chat-meeting />
    <div class="post-header">
      <div class="title">Bài đăng</div>
      <div class="">
        <a-button type="primary" icon="video-camera">Tham gia</a-button>
        <span> <a-icon class="action-post-icon setting" type="setting" /></span>
      </div>
    </div>
    <div class="list-post">
      <a-list
        item-layout="vertical"
        size="large"
        class="list-notice"
        style="padding: 10px; border-radius: 5px"
        :data-source="listData"
      >
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <post-item :item="item" :listData="listData" />
          <div class="list-item-footer">
            <span>
              <input placeholder="Nhập câu trả lời" />
              <span style="float: right"
                ><a-icon type="right-square"></a-icon
              ></span>
              <a-icon type="enter" />
              Trả lời
            </span>
          </div>
        </a-list-item>
      </a-list>
    </div>
    <div class="post-form">
      <textarea placeholder="Tạo bài viết mới" />
      <div class="post-form-action">
        <span style="float: right">
          <a-icon class="action-post-icon" type="right-square"> </a-icon>
        </span>
        <span style="display: flex">
          <a-upload
            style="margin-right: 10px"
            name="logo"
            action="/upload.do"
            list-type="picture"
          >
            <a-icon class="action-post-icon" type="paper-clip" />
          </a-upload>
          <a-upload name="logo" action="/upload.do" list-type="picture">
            <a-icon class="action-post-icon" type="file-image" />
          </a-upload>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import PostItem from "./Group/PostItem.vue";
import ChatMeeting from "./Meeting/ChatMeeting.vue";
const listData = [];
for (let i = 0; i < 4; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: `Tên người ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

export default {
  components: { ChatMeeting, PostItem },
  data() {
    return {
      listData,
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
      actions: [{ type: "check", text: "Đã đọc" }],
    };
  },
};
</script>

<style scoped>
.setting {
  margin-left: 20px;
}
.title {
  font-size: 18px;
  font-weight: 500;
}
.post-header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 555;
  padding: 16px 32px 16px 32px;
  width: calc(100% - 300px);
  top: 0;
  background: #fff;
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
.list-item-footer {
  margin-left: 48px;
}
.ant-list-vertical .ant-list-item-action {
  margin-top: 0 !important;
}
.ant-input {
  border: none;
  border-width: 0;
  box-shadow: none;
}
.flex {
  display: flex;
}
.list-post {
  height: 100vh;
  overflow-y: auto;
  padding: 50px 36px 100px 20px;
  width: calc(100% - 300px);
}
</style>