<template>
  <div class="list-notice-pane">
    <a-list
      :loading="loading"
      :pagination="pagination"
      item-layout="horizontal"
      :data-source="data"
      style="padding: 10px 25px 10px 25px; background: #fff; border-radius: 5px"
    >
   
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <a slot="actions"> <a-icon type="check" style="margin-right: 8px" /></a>
        <a slot="actions"> <a-icon type="read" style="margin-right: 8px" /></a>
        <a slot="actions"><a-icon type="delete" style="margin-right: 8px" /></a>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://www.antdv.com/">{{ item.content }}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-list-item-meta>
        <div><a-badge status="success" text="New" /></div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: `ant design vue part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}
export default {
  data() {
    return {
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
      data: listData,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 6,
      },
    };
  },
  methods: {},
};
</script>
<style>
.list-notice-pane {
  padding: 20px 7% 20px 7%;
}
</style>