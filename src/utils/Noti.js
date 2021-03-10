import io from "socket.io-client";
import { generateHeader } from "../services/api";
export default class Noti {
  //Constructor to set the store reference, create socket io instance and initialize listeners.
  constructor(store, noti) {
    this.store = store;
    this.noti = noti;
    this.socket = io(process.env.VUE_APP_HOST_NOTI_WS, {
      query: generateHeader()
    });
    this.initListeners();
  }
  async initListeners() {
    this.socket.on('notification', (notice) => {
      this.noti.open({
        message: notice?.title,
        description: notice?.content,
        placement: "bottomRight",
        onClick: () => {
          console.log(notice.action);
        },
      });
    })
  }
}
