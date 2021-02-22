<template>
  <div>
    <a-row>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <a-collapse :bordered="false" class="list-exercise" v-model="activeKey">
            <a-collapse-panel key="1" header="Bài tập hiện tại">
              <list-exercise :type="'CURRENT'" />
            </a-collapse-panel>
            <a-collapse-panel key="2" header="Bài tập đã hết hạn">
              <list-exercise :type="'EXPIRED'" />
            </a-collapse-panel>
          </a-collapse>
        </a-card>
      </a-col>
      <a-col :span="18">
        <list-submit />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import ListExercise from "./Exercise/ListExercise.vue";
import ListSubmit from "./Exercise/ListSubmit.vue";

export default {
  components: { ListSubmit, ListExercise },
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ["1"],
    };
  },
};
</script>
<style scoped>
.ant-card-body {
  padding: 0px 0px 0px 0px !important ; 
}
.list-exercise {
  height: 500px;
  overflow: scroll;
}

</style>