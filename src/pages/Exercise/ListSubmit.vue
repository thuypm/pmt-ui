<template>
  <a-table :columns="columns" :data-source="data">
    <a
      slot="submit_file"
      slot-scope="submit_file"
      target="_blank"
      :href="hostResoucre + submit_file.link"
      >{{ submit_file.name |trimNameFile  }}</a
    >
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag.key"
        :color="tag.tag === 'LATE' ? 'volcano' : 'green'"
      >
        {{ tag.text }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="record">
      <!-- <a>Invite 一 {{ record.name }}</a> -->
      <a-divider type="vertical" />
      <a
        v-if="username === selectedItem.owner.username"
        @click="() => handleEvaluate(record)"
      >
        <a-icon type="snippets" /> Đánh giá</a
      >
      <a v-else @click="() => handleDeleteSubmit(record)">
        <a-icon type="delete"></a-icon> Xóa</a
      >
    </span>
  </a-table>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";
import { trimNameFile } from '../../utils/filters';
const columns = [
  {
    dataIndex: "username",
    title: "Username",
    key: "username",
    dataIndex: "username",
    key: "name",
  },

  {
    title: "Bài nộp",
    dataIndex: "submit_file",
    key: "submit_file",
    slots: { title: "submit_file" },
    scopedSlots: { customRender: "submit_file" },
  },

  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Điểm",
    key: "point",
    dataIndex: "point",
  },
   {
    title: "Nhận xét",
    key: "evaluate",
     dataIndex: "evaluate",
  },
  {
    title: "Hành động",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [];
export default {
  data() {
    return {
      columns,
      username: localStorage.username,
      hostResoucre: process.env.VUE_APP_HOST_RESOURCE,
    };
  },
  filters:{
    trimNameFile: trimNameFile,
  },
  computed: {
    ...mapState({
      selectedItem: (state) => state.exercise.selectedItem,
      data: (state) => {
        let arrayData = state.exercise.selectedItem?.list_submit?.map(
          (cell) => {
            return {
              _id: cell._id,
              key: cell._id,
              username: cell?.owner?.username,
              submit_file: {
                name: cell?.name_file,
                link: cell?.link_file,
              },
              evaluate: cell.evaluate,
              status: [
                moment(cell?.time_submit).valueOf() <
                moment(state?.exercise?.selectedItem?.deadline).valueOf()
                  ? {
                      tag: "ONTIME",
                      text: "Đúng hạn",
                    }
                  : {
                      tag: "LATE",
                      text: "Muộn",
                    },
              ],
              point: cell?.point,
            };
          }
        );

        return arrayData;
      },
    }),
  },
  methods: {
    handleDeleteSubmit(item) {
      console.log(item);
    },
    handleEvaluate(item) {
      this.$store.commit("exercise/setVisibleModalEvaluate", true);
      this.$store.commit("exercise/setSelectedSubmit", item);
    },
  },
};
</script>
