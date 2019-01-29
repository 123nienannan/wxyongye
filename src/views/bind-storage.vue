<template>
<div class="bind-storage">
  <h2>已入库</h2>
  <div class="warn-storage">
   <div class="warn-top">
     <div class="top-left">
       <span class="leftone">已绑定</span>
       <span class="lefttwo">沪K34534</span>
     </div>
     <div class="top-right">
       <div class="rightone">
         <img src="../assets/images/map.png">
       </div>
       <div class="righttwo">C区203</div>
     </div>
   </div>
   <div class="caculateTime">
     <div class="caculateTime-left">
       <div class="enter">入场时间</div>
       <div class="today">今天 09:32</div>
     </div>
     <div class="caculateTime-right">
       <div class="park">停车时长</div>
       <div class="during">10小时59分钟</div>
     </div>
   </div>
  </div>
   <div class="title">
      <span class="seat">您的车位</span>
      <span class="kepp">续费记录</span>
   </div>
    <div class="storage-main">
      <ul>
        <li>
          <div class="storage-time">
            1号车位
          </div>
          <div class="unbind-record">
            <h2>C区203</h2>
            <span v-if='!showdifferent'>沪K345534</span>
            <div class="speacil" v-if='showdifferent'>未停车</div>
          </div>
          <div class="storage-keep">
            <div class="storageLf">
              <img v-if="!showIcon" src="../assets/images/fade-colock.png">
              <img v-if="showIcon" src="../assets/images/color-colock.png"><span>2019/ 01/01 到期</span>
            </div>
            <div class="storageRf">续期</div>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      showIcon:true,
      showdifferent:true
    }
  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
.bind-storage {
    background-color: #f5f6f7;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/images/top-background.png") no-repeat;
    background-size: 100% 718px;
    padding: 94px 48px 0;
    box-sizing: border-box;
    h2 {
      font-size: 50px;
      color: #fff;
      padding-bottom: 70px;
    }
    .warn-storage {
      padding: 48px 48px 42px;
      background-color: #f1c120;
      box-shadow: 0px 10px 13px 1px
        rgba(90, 90, 90, 0.08);
      border-radius: 10px;
      .warn-top {
        margin-bottom: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .top-left {
          .leftone {
            background-image: linear-gradient(-45deg,
              #2d7afb 0%,
              #3faafc 100%);
            border-radius: 4px;
            font-size: 24px;
            color: #fff;
            padding: 7px 18px;
          }
          .lefttwo {
            font-size: 42px;
            color: #333;
            padding-left: 20px;
          }
        }
        .top-right {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .rightone {
            width: 26px;
            height: 30px;
            img {
              width: 100%;
            }
          }
          .righttwo {
            font-size: 28px;
            color: #333;
            padding-left: 15px;
          }
        }
      }
      .caculateTime {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .caculateTime-left {
          .enter {
            font-size: 24px;
            color: #666;
            padding-bottom: 16px;
          }
          .today {
              font-size: 28px;
              color: #333;
          }
        }
        .caculateTime-right {
           .park{
             font-size: 24px;
             color: #666;
             padding-bottom: 16px;
           }
           .during {
             font-size: 38px;
             color: #333;
           }
        }
      }
    }
     .title {
        padding-top: 70px;
        padding-bottom: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .seat {
         font-size: 26px;
         color: #f5f6f7;
        }
        .kepp {
          font-size: 26px;
          color: #f1c120;
        }
     }
     .storage-main {
        li {
          position: relative;
          margin-bottom: 25px;
          padding: 34px 30px 23px 44px;
          background-color: #ffffff;
          box-shadow: 0px 10px 13px 1px
            rgba(90, 90, 90, 0.08);
          border-radius: 10px;
          .unbind-record {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            h2 {
              font-size: 42px;
              color: #333;
              letter-spacing: 4px;
            }
            span {
              background-image: linear-gradient(-45deg,
                #2d7afb 0%,
                #3faafc 100%);
              border-radius: 4px;
              font-size: 28px;
              color: #fff;
              padding: 10px 13px;
            }
            .speacil {
                font-size: 28px;
                color: #666;
            }
          }
          .storage-time {
            padding-bottom: 24px;
            font-size: 24px;
            color: #666;
          }
          .storage-keep {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .storageLf {
              img {
                vertical-align: middle;
                width: 46px;
                height: 46px;
              }
              span {
                padding-left: 22px;
              }
            }
            .storageRf {
              padding: 22px 72px;
              font-size: 28px;
              color: #000;
              border-radius: 35px;
              border: solid 1px #f1c120;
            }
          }
        }
      }
}
</style>
