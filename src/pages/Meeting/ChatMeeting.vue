  <template>
  <div class="chat-bar">
    <chat-body
      :chatSocket="chatSocket"
      :roomId="roomId"
      :username="username"
      class="chat-body"
    />
    <chat-footer
      :chatSocket="chatSocket"
      :roomId="roomId"
      :username="username"
      class="chat-footer"
    />
  </div>
</template> 
  <script>
import ChatBody from "./ChatComponent/ChatBody.vue";
import ChatFooter from "./ChatComponent/ChatFooter.vue";
import io from "socket.io-client";

var socket = io.connect(process.env.VUE_APP_HOST_WS_CHAT);
export default {
  props: ["roomId"],
  components: { ChatFooter, ChatBody },
  data() {
    return {
      chatSocket: socket,
      username: localStorage.username,
    };
  },
  created() {
    this.chatSocket.emit("join-room", this.roomId);
  },
};
</script>
  <style >
.chat-bar {
  width: 300px;
  float: right;
  height: 100%;
  transition: width 1s;
}
.chat-body {
  height: calc(100vh - 96px);
  height: -webkit-calc(100vh - 96px);
  height: -moz-calc(100vh - 96px);
  height: -o-calc(100vh - 96px);
  height: expression(100vh - 96px);
}
.chat-footer {
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