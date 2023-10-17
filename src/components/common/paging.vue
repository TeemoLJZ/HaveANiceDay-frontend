<template>
   <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="listCustomers"
    />
</template>

<script>
import {listcustomers} from '../../api/api'
export default {
  name: 'Paging',
  props: {
    total: Number,
    pageSize:Number,
  },
  data(){
    return{
      currentPage:1
    }
  },
  methods:{
    listCustomers(){
      listcustomers('list_customer',this.$parent.pageSize,this.currentPage)
      .then(response => (
        this.customerlist= response.data.retlist,
        this.total = response.data.total
      ))
      .catch(error => {
        console.log(error)
      })
  }
}
}
</script>
