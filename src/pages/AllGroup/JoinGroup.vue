<template>
  <a-row :style="{ margin: '0 0 0 0 ', padding: '16px' }">
    <a-col :md="3">
      <b>Nhóm của bạn</b>
    </a-col> 
       <a-col :md="5" :lg="4" :xl="3"  style="float:right" >
      <a-form layout="inline">
        <a-form-item>
          <a-button type=""><a-icon type="plus-circle" />Tạo nhóm mới</a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :md="15" :lg="11" :xl="10" style="float: right" >
      <a-form layout="inline">
        <a-form-item label="Nhập code nhóm">
          <span>
            <a-input type="text" />
          </span>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit"> Tham gia </a-button>
        </a-form-item>
      </a-form>
    </a-col>

  </a-row>
</template>
<script>
export default {
    
}
</script>