<template>
  <div class="car-keep">
     <div class="carkeep-top">

     </div>
     <div class="carkeep-main">
       <p class="buy date">购买月数</p>
       <div class="opertion">
          <div class="sub">
            <img src="../assets/images/sub.jpg">
          </div>
          <span>2</span>
          <div class="add">
           <img src="../assets/images/add.jpg">
          </div>
       </div>
       <p class="buy info">购买信息</p>
       <div class="buy-content">
         <div class="title">C区203</div>
         <div class="calendar">
           <div class="calendar-left">
             <div class="save-pic"><img src="../assets/images/calendar.png"></div>
             <span>购买月份</span>
           </div>
           <span class="calendar-right">2个月</span>
         </div>
         <div class="expire">
           <div class="expire-left">
             <div class="save-pic"><img src="../assets/images/park-time.png"></div>
             <span>到期时间</span>
           </div>
           <span class="expire-right">2019/03/01</span>
         </div>
         <div class="payment">
           <div class="payment-left">
             <div class="save-pic"><img src="../assets/images/icon-money.png"></div>
             <span>所需费用</span>
           </div>
           <span class="payment-right">1600元</span>
         </div>
       </div>
       <div class="foot-btn" @click="bindnowPayment">
         <div class="icon-wechat"><img src="../assets/images/wechat.png" alt=""></div>
         立即支付
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
   bindnowPayment () {
     this.$router.push({name:'keepPayment'})
   }
  },
}
</script>

<style lang='less' scoped>
.car-keep {
  background-color: #f5f6f7;
  position: absolute;
  width: 100%;
  height: 100%;
  .carkeep-top {
    padding: 94px 47px 62px;
    box-sizing: border-box;
    height: 440px;
    background: url("../assets/images/background-colock.png") no-repeat;
    background-size: cover;
  }
  .carkeep-main {
    padding: 39px 49px 0;
    .buy {
      font-size: 26px;
      color: #999;
      padding-bottom: 20px;
    }
    .opertion {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      height: 100px;
      background-color: #fff;
      border-radius: 50px;
      span {
        font-size: 32px;
        color: #000;
      }
      .add {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
        }
      }
      .sub {
         width: 80px;
         height: 80px;
         img {
          width: 100%;
         }
      }
    }
    .info {
      padding-top: 55px;
    }
    .buy-content {
      box-sizing: border-box;
      padding: 35px 40px;
      background-color: #ffffff;
      box-shadow: 0px 10px 13px 1px
        rgba(90, 90, 90, 0.08);
      border-radius: 10px;
      .title {
        font-size: 40px;
        color: #333333;
        padding-bottom: 40px;
      }
      .calendar {
        padding-bottom: 34px;
        display: flex;
        justify-content: space-between;
        .calendar-left {
           .save-pic {
              vertical-align: middle;
              display: inline-block;
              width: 34px;
              height: 34px;
              img {
                width: 100%;
              }
           }
           span {
             font-size: 28px;
             color: #333;
           }
        }
        .calendar-right{
          font-size: 28px;
          color: #333;
        }
      }
      .expire {
        padding-bottom: 34px;
        display: flex;
        justify-content: space-between;
        .expire-left {
           .save-pic {
              vertical-align: middle;
              display: inline-block;
              width: 34px;
              height: 34px;
              img {
                width: 100%;
              }
           }
           span {
             font-size: 28px;
             color: #333;
           }
        }
        .expire-right{
          font-size: 28px;
          color: #333;
        }
      }
      .payment {
         padding-bottom: 34px;
        display: flex;
        justify-content: space-between;
        .payment-left {
           .save-pic {
              vertical-align: middle;
              display: inline-block;
              width: 34px;
              height: 34px;
              img {
                width: 100%;
              }
           }
           span {
             font-size: 28px;
             color: #333;
           }
        }
        .payment-right{
          font-size: 28px;
          color: #333;
        }
      }
    }
    .foot-btn {
      border-radius: 8px;
      margin-top: 34px;
      height: 88px;
      background-color: #f1c120;
      font-size: 30px;
      color: 000;
      display: flex;
      justify-content: center;
      align-items: center;
     .icon-wechat {
       width: 36px;
       height: 30px;
       img {
         width: 100%;
       }
     }
    }
  }
}
</style>
