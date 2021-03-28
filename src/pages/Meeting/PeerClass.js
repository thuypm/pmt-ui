export class PeerClass {
    constructor(options) {
        this.socketId = options?.socketId;
        this.stream = options?.stream;
        this.peerObject = options?.peerObject;
        this.username = options?.username;
        this.peerObject.on("stream", stream => {
            this.stream = stream;
        })
        
    };
}