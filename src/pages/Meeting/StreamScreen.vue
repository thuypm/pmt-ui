<template>
  <div>
    <a-row
      type="flex"
      justify="space-around"
      align="middle"
      class="share-screen"
    >
      <share-screen />
    </a-row>
    <camera-screen class="" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import CameraScreen from "./StreamComponent/CameraScreen.vue";
import ShareScreen from "./StreamComponent/ShareScreen.vue";
import io from "socket.io-client";
import { PeerClass } from "./PeerClass";
import SimplePeer from "simple-peer";
// let socket = io.connect(process.env.VUE_APP_HOST_WS_MEETING);
let myPeer = [];
let peer = [];
export default {
  components: { ShareScreen, CameraScreen },
  data() {
    return {
      meetingSocket: io.connect(process.env.VUE_APP_HOST_WS_MEETING),
      username: localStorage.username,
    };
  },
  computed: {
    ...mapState({
      mediaDevice: (state) => state.meeting.mediaDevice,
    }),
  },
  watch: {
    mediaDevice(value) {
      this.handleGetDevice(value);
      return value;
    },
  },
  created() {
    this.meetingSocket.emit("join-room", this.roomId, this.username);
    this.meetingSocket.on("new-client", (data) => {
      if (data.socketId !== this.meetingSocket.id) {
        let newPeer = new PeerClass({
          socketId: data.socketId,
          username: data.username,
          stream: null,
          peerObject: new SimplePeer({
            initiator: true,
            trickle: false,
          }),
        });
        newPeer.peerObject.on("signal", (token) => {
          console.log("initiator", token);
          this.meetingSocket.emit("res-new-client", {
            clientId: data.socketId,
            socketId: this.meetingSocket.id,
            username: this.username,
            token: token,
          });
        });
        this.$store.dispatch("meeting/addClient", newPeer);
      }
    });

    this.meetingSocket.on("offer-token", (data) => {
      if (data.socketId !== this.meetingSocket.id) {
        if (data.token.type === "offer") {
          let newPeer = new PeerClass({
            socketId: data.socketId,
            username: data.username,
            stream: null,
            peerObject: new SimplePeer({
              trickle: false,
            }),
          });
          newPeer.peerObject.signal(data.token);
          newPeer.peerObject.on("signal", (token) => {
            console.log("noinitiator", token);
            this.meetingSocket.emit("answer-token", {
              clientId: data.socketId,
              socketId: this.meetingSocket.id,
              username: this.username,
              token: token,
            });
          });
          this.$store.dispatch("meeting/addClient", newPeer);
        } else {
          this.$store.dispatch("meeting/signalAnswerToken", data);
        }
      }
    });
    this.meetingSocket.on("answer-token", (data) => {
      if (data.socketId !== this.meetingSocket.id) {
        this.$store.dispatch("meeting/signalAnswerToken", data);
      }
    });
  },
  beforeDestroy() {
    this.meetingSocket.close();
    this.$store.dispatch("meeting/destroyAllConnection");
  },
  methods: {
    handleGetDevice(media) {
      if (media.camera || media.micro) {
        navigator.mediaDevices
          .getUserMedia({ audio: media.micro, video: media.camera })
          .then((stream) => {
            this.$store.dispatch("meeting/startVideoCall", stream);
          });
      }
    },
  },
};
</script>
<style scoped>
.share-screen {
  background: black;
  height: calc(100vh - 170px);
  height: -webkit-calc(100vh - 170px);
  height: -moz-calc(100vh - 170px);
  height: -o-calc(100vh - 170px);
  height: expression(100vh - 170px);
}
.camera-screen {
  height: 170px;
}
</style>