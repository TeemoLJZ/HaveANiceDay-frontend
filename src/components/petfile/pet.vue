<template>
  <div class="pet">
    <div class="banner">
      <img src="../../assets/banner-service.png" alt="">
      <el-button type="success" class="book-button">Book an in-home feeding</el-button>
    </div>
    <div class="title">Who chose us?</div>
    <div class="pet-card">
      <div v-for="index in 4" :key="index" class="one-card">
        <div class="one-card" >
          <div class="avatar">
            <img src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' />
          </div>
          <div class="info">
            <div class="name">Liu Liu</div>
            <div class="level">
              <div class="tag">
                <div class="tag-content">LV1</div>
              </div>
              <div class="time-static" v-bind:class="servedTimes"  >Served {{times}} times</div>
            </div>
            
            <div class="des">"Naughty, likes to look out the window after a good meal."</div>
          </div>
        </div>
    </div>
    </div>
    <div class="see-more">
      <el-link type="success">See more feeding cats</el-link>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Pet',
  props: {
    msg: String
  },
  data(){
    return{
      times:2,
    }
  },
  computed:{
    servedTimes(){
      switch(this.times){
        case 1:
          return {
            lv1:true
          };
        case 2:
          return{
            lv2:true
          };
        case 3:
          return{
            lv3:true
          }
        case 4:
          return {
            lv4:true
          };
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pet{
  .title{
    text-align: center;
    font-size: 28px;
    margin-top: auto 32px;
  }
  .banner{
    position: relative;
    width:1160px;
    height:360px;
    margin: 32px auto;
    text-align: center;
    
    .book-button{
      position: absolute;
      left: 77px;
      bottom: 27px;
      z-index: 1;
    }
  }
  .pet-card{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .one-card{
      width: 560px;
      height: 204px;
      margin-left: 40px;
      margin-top: 16px;
      border-radius: 10px;
      background: rgba(225, 250, 221, 0.23);
      display: flex;
      flex-direction: row;
      .avatar{
        width: 120px;
        height: 120px;
        margin-left:24px ;
        margin-top:24px;

        
      }
      .info{
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        margin-top: 24px;

        .name{
          font-size: 28px;
          font-weight: 500;
          color: #303133;
          margin-bottom: 16px;
        }
        .level{
          display: flex;
          flex-direction: row;
          gap: 8px;

          .time-static{
          font-size: 16px;
          font-weight: 500;
          // color: #99D64B;
          margin-bottom: 16px;
        }
        .lv1{
          color:firebrick
        }
        .lv2{
          color: #99D64B;
        }
        .tag{
          width: 80px;
          height: 20px;
          border-radius: 5px;
          background: #99D64B;
          
          .tag-content{
            width: 24px;
            height: 16px;
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            color: #FFFFFF;
            margin: auto;
            padding:2px;
          }
        }
        }
        
        .des{
          font-size: 14px;
          font-weight: normal;
          line-height: 22px;
          color: #909399;
        }
      }
    }
  }
  .see-more{
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    margin-top: 16px;
    text-align: center;
  }
}
</style>