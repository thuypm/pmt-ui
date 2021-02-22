<template>
  <div class="chat-body">
    <div class="receive-message">
      <div class="msg">
        <a-avatar
          class="receive-avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div class="msg-receive-container">
          <div class="msg-content">
            abcxyz /* position: absolute; */ /* position: absolute; */ /*
            position: absolute; */
          </div>
          <div class="msg-time msg-receive-time">4:20</div>
        </div>
      </div>
    </div>
     <div class="send-message">
      <div class="msg">
        <a-avatar
          class="send-avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div class="msg-send-container">
          <div class="msg-content">
            abcxyz /* position: absolute; */ /* position: absolute; */ /*
            position: absolute; */
          </div>
          <div class="msg-time msg-send-time">4:20</div>
        </div>
      </div>
    </div>
    <div class="receive-message">
      <div class="msg">
        <a-avatar
          class="receive-avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div class="msg-receive-container">
          <div class="msg-receive-content">abcxyz</div>
          <div class="msg-time">4:20</div>
        </div>
      </div>
    </div>

    <div class="send-message">
      <div class="msg">
        <a-avatar
          class="send-avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div class="msg-send-container">
          <div class="msg-content">
            abcxyz /* position: absolute; */ /* position: absolute; */ /*
            position: absolute; */
          </div>
          <div class="msg-time msg-send-time">4:20</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.chat-body {
  overflow-y: scroll; 
}
.send-message {
  padding: 5px;
}
.msg-send-container {
  display: inline-block;
  position: relative;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  background: #e5e5f1;
  /* left: 32px; */
  top: 0px;
}
.msg-send-time{
    float: right;
}
.send-avatar {
  /* position: absolute; */
  float: right;
}

.receive-message {
  position: static;
  padding: 5px;
}
.msg-receive-container {
  display: inline-block;
  position: relative;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  background: #fff;
  top: 0px;
}
.receive-avatar {
  /* position: absolute; */
  float: left;
}
.msg-content {
  max-width: 220px;
}
.msg-time {
  font-size: 10px;
}
</style>