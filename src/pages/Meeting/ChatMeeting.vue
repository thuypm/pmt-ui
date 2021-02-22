  <template>
  <div class="chat-bar">
    <chat-body class="chat-body" />
    <chat-footer  class="chat-footer"/>
    <!-- <a-card-meta title="Card title" description="This is the description">
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-card-meta> -->
  </div>
</template> 
  <script>
import ChatBody from "./ChatComponent/ChatBody.vue";
import ChatFooter from "./ChatComponent/ChatFooter.vue";

export default {
  components: { ChatFooter, ChatBody },
};
</script>
  <style >
/* .chat-body {
  height: 100vh;
} */
.chat-bar {
  /* background: #fff; */
  float: right;
  height: 100%;
    transition: width 1s;
}
.chat-body{

  height: calc(100vh - 96px  );
  height: -webkit-calc(100vh - 96px  );
  height: -moz-calc(100vh - 96px  );
  height: -o-calc(100vh - 96px  );
  height: expression(100vh - 96px  );
}
.chat-footer{
  height: 96px;
}
.chat-meeting {
  width: 300px;
}

.chat-bar > .ant-card-body {
  padding: 0 !important;
}
.ant-form-item {
  margin: 0 !important ;
}
</style>