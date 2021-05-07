<template>
  <div class="chat-bar" style="padding: 8px 16px">
    <div>
      <b>Những người tham gia</b>
      <hr />
    </div>
    <a-list-item>
      <a-list-item-meta>
        <a slot="title" href="https://www.antdv.com/">{{
          username + " (bạn)"
        }}</a>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-list-item-meta>
    </a-list-item>
    <a-list :data-source="listUser">
      <a-list-item slot="renderItem" slot-scope="user">
        <a-list-item-meta>
          <a slot="title" href="https://www.antdv.com/">{{ user.username }}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-list-item-meta>
        <a-icon v-if="listClient.find(e=> e.username === user.username)" type="check" style="color: green"></a-icon>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      username: localStorage.username,
      listUserView: [],
    };
  },
  computed: {
    ...mapState({
      listUser: (state) => state.meeting.listUser,
      listClient: (state) => state.meeting.listClient,
    }),
  },
//   watch: {
//     listUser: function (value) {
//       console.log(value);
//       this.listUserView = value.map((e) => {
//         return {
//           ...e,
//           online: value?.find((f) => f.username === e.username),
//         };
//       });
//     },
//   },
//   listClient: function (value) {
//     this.listUserView = this.listUser.map((e) => {
//       return {
//         ...e,
//         online: value?.find((f) => f.username === e.username),
//       };
//     });
//   },
};
</script>
