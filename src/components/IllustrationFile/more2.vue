<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">
      <div style="border-style:solid">{{i}}</div>
    </li>
  </ul>
</template>

<script>
export default{
  name:'more2',
  data(){
    return{
      count:10
    }
  },
  methods:{
    load(){
      this.count += 1,
      console.log('滚动成功')
    }
  }
}
</script>

<style>
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>