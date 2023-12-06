<template>
  <div class="more-illu">
    <BreadCrumb/>
    <div class="filter">
      <!-- <el-radio-group v-model="radio1">
        <el-radio label="1" size="large" border>ALL</el-radio>
        <el-radio label="2" size="large" border>Pet</el-radio>
        <el-radio label="3" size="large" border>Character</el-radio>
        <el-radio label="4" size="large" border>Plant</el-radio>
      </el-radio-group> -->
      <el-radio-group v-model="radio" size="large" @change="getillu">
      <el-radio-button label="" >ALL</el-radio-button>
      <el-radio-button label="pet">Pet</el-radio-button>
      <el-radio-button label="character">Character</el-radio-button>
      <el-radio-button label="plant">Plant</el-radio-button>
    </el-radio-group>
      <!-- <div class="filter-collapse"> 折叠面板布局，弃用
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="filter" name="1" >
            <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="top">
              <el-form-item label="Keywords">
                <el-input v-model="formInline.user" placeholder="Enter some keywords to search for illustrations" clearable />
              </el-form-item>
              <el-form-item label="Source">
                <el-select
                  v-model="formInline.region"
                  placeholder="Activity zone"
                  clearable
                >
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="Feature">
                <el-select
                v-model="formInline.region"
                clearable
            >
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-form>
      </el-collapse-item>
    </el-collapse>
    </div> -->
      <div class="filter2">
        <el-popover placement="bottom" :width="300" :visible="visible">
        <template #reference >
          <el-badge :hidden="hidden" :value="filtervalue" type="warning" style="margin:12px 16px">
            <el-button type="success" round @click="visible= !visible" >filter</el-button>
          </el-badge>
        </template>
        <el-form  :model="searchform" class="demo-form-inline" label-position="top">
          <el-form-item label="Keywords">
            <el-input v-model="searchform.keywords" placeholder="Enter some keywords to search for illustrations" 
            clearable  />
          </el-form-item>
          <el-form-item label="Source">
            <el-select
              v-model="searchform.source"
              placeholder="Source"
              clearable
              multiple
            >
              <el-option v-for="item in optionsource" :key="item" :label="item.label" :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="Feature">
            <el-select
              v-model="searchform.feature"
              clearable
            >
              <el-option  v-for="item in optionfeature" :key="item" :label="item.label" :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="getillu">Query</el-button>
            <el-button @click="clear">Clear</el-button>
          </el-form-item>
            </el-form>
      </el-popover>
      </div>
    </div>
    <div class="illu">
        <div class="pic-card" v-for="illu in illulist" :key="illu">
          <el-image class="pic" :src="illu.src" fit="cover" ></el-image>
          <div class="bottom">
            <el-link class="name" @click="goToDetailPage(illu.id)">{{illu.name}}</el-link>
            <div class="author">{{illu.author}}</div> 
            <div class="heart" @click="favorites">
              <img src="../../assets/heart.png" alt="" v-show="!illu.islike">
              <img src="../../assets/heartreal.png" alt="" v-show="illu.islike">
            </div>
          </div>
          
        </div>
      </div>
    <el-pagination layout="prev, pager, next" :total="total" :page-size="pagesize"  v-model:current-page="currentpage" 
      @current-change="getillu"/>
  </div>
</template>

<script>
import BreadCrumb from '@/components/common/BreadCrumb'
import {listillus} from "../../api/api"
export default {
  name: 'more',
  data(){
    return{
      radio:"",
      searchform:{
        keywords: '',
        source: [],
        feature: '',
      },
      // 暂时先把选项写死，避免遍历整个列表去重性能太差，后端单独建表可以解决
      optionsource:[
       {
        value:'photograph',
        lable:'photograph'
       },
       {
        value:'story',
        lable:'story'
       },
       {
        value:'music',
        lable:'music'
       },
       {
        value:'imagine',
        lable:'imagine'
       },
      ],
      optionfeature:
        [
          {
            value:'flat',
            lable:'flat'
          }
        ],
      activeNames:[1],
      illulist:[],
      pagesize:16,
      currentpage:1,
      total:0,
      visible:false,
      filtervalue:0,
      hidden:true
    }
  },
  methods:{
    // 计算徽章数值，如果有值就让徽章展示且展示值，如果没有值就不展示
    calcufiltervalue(){
      let keywordsvalue = 0
      let sourcevalue = 0 
      let featurevalue = 0
      let typevalue = 0
      this.searchform.keywords.length >0? keywordsvalue =1 : keywordsvalue = 0
      sourcevalue = this.searchform.source.length
      this.searchform.feature.length > 0? featurevalue = 1 : featurevalue = 0
      this.filtervalue = keywordsvalue + sourcevalue + featurevalue
      // 如果用户有或搜索项，就把列表的page置为1
      this.radio.length>0? typevalue =1 : typevalue=0
      if(this.filtervalue> 0 || typevalue >0){
        this.currentpage = 1
      }
      this.filtervalue>0? this.hidden=false : this.hidden=true
    },
    // 获取插画接口数据
    getillu(){
      this.visible = false
      this.calcufiltervalue()
      // source是多选，要用toString把列表转化成字符串给接口
      listillus(this.pagesize,this.currentpage,this.searchform.keywords,this.searchform.source.toString(),this.searchform.feature,this.radio)
      .then(response=>{
        if(response.data.ret == 0){
          this.illulist = response.data.retlist,
          this.total = response.data.total
          // 根据列表数据的source和feature去重的代码，不采用这个方案
          // this.optionlist.source = Array.from(new Set(this.illulist.map(item=>item.source)))
          // console.log('optionlist'+this.optionlist.source)
          // this.optionlist.feature = Array.from(new Set(this.illulist.map(item=>item.feature)))
          //this.searchform.source=[]
        }
        else{
          this.$message({
            message: "something is wrong",
            type:"error"
          })
        }
    }
    )
    .catch(error=>{
      console.log(error)
    })
    },
    clear(){
      this.searchform={
        keywords:'',
        source:[],
        feature:'',
      },
      this.getillu()
    },
    goToDetailPage(id){    
      this.$router.push({
        name:'details',
        params:{
          id:id
        }
      })
    }
  },
  created(){
    this.getillu()
  },
  props: {
    msg: String
  },
  components:{
    BreadCrumb,
  }
}
</script>

<style lang="scss" scoped>
.more-illu{
  .filter{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .illu{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 40px;
    margin-left: 16px;
    .pic-card{
      width: 280px;
      height: 345px;
      .pic{
        width:280px; 
        height:280px;
      }
      .bottom{
        position: relative;
        .name{
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0em;
        }
        .author{
          font-size: 14px;
          font-weight: normal;
          line-height: 22px;
          letter-spacing: 0em;
        }
        .heart{
          width: 24px;
          height: 24px;
          position: absolute;
          top: 20px;
          left: 256px;
        }
      }
      
    }
  }
}
</style>