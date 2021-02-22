<template>
  <a-form layout="inline">
    <a-row>
      <a-form-item>
        <a-textarea style="width: 300px; max-height: 51.6px;"></a-textarea>
      </a-form-item>
    </a-row>
    <a-row class="space-row">
      <!-- <a-col :span="24"> -->
      <a-col :span="3">
        <a-form-item>
          <a-upload name="logo" action="/upload.do" list-type="picture">
            <a-icon type="paper-clip"  class="action-post-icon"/>
          </a-upload>
        </a-form-item>
      </a-col>
       <a-col :span="3">
        <a-form-item>
          <a-upload name="logo" action="/upload.do" list-type="picture">
           <a-icon type="file-image"  class="action-post-icon" />
          </a-upload>
        </a-form-item>
      </a-col>
      <a-col :span="2" offset="16">
        <a-form-item>
          <a-icon type="right-square" class="action-post-icon"/>
        </a-form-item>
      </a-col>
      <!-- </a-col> -->
    </a-row>
  </a-form>
</template>
<script>
export default {};
</script>
<style  scoped>

.space-row {
  padding: 0 5px 0 5px;

}
</style>