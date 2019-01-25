<template>
<div class="temporary-stop">
  <h2>停车时长</h2>
  <div class="time">
    <span class="hour">10</span>:<span class="minitue">56</span>:<span class="second">10</span>
  </div>
  <div class="money">停车金额</div>
  <div class="price">
    <div class="money-style"><img src="../assets/images/money.png"></div>
    <span>&yen;&nbsp;55</span>
  </div>
  <div class="warn">目前只支持微信支付</div>
  <div class="foot">
    <div class="unbind-car">
      <span class="unbind">未绑定</span>
      <span class="car">沪A3489</span>
    </div>
    <div class="enter-time">
      <span>入场时间</span>
      <span>2018/07/11 09:32</span>
    </div>
    <div class="park-time">
      <span>停车时长</span>
      <span>10小时59分钟</span>
    </div>
    <div class="need-money">
      <span>所需费用</span>
      <span>34元</span>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.temporary-stop {
    overflow-y: scroll;
    padding-top: 165px;
    top:0;
    left:0;
    right:0;
    bottom:0;
    position: absolute;
    background: url("../assets/images/background-two.png") no-repeat;
    background-size: cover;
    h2 {
      text-align: center;
      font-size: 28px;
      color: #fff;
      opacity: 0.7;
      padding-bottom: 45px;
    }
    .time {
      color: #888;
      text-align: center;
      font-size: 120px;
     .hour {
        letter-spacing: 9px;
        color: #ffffff;
     }
     .minitue {
       letter-spacing: 9px;
	     color: #888888;
     }
     .second {
       letter-spacing: 9px;
	     color: #f1c120;
     }
    }
    .money {
      color: #ffffff;
      opacity: 0.7;
      font-size: 28px;
      text-align: center;
      padding-top: 65px;
      padding-bottom: 32px;
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
     .money-style {
       width: 47px;
       height: 34px;
       img {
         width: 100%;
         height: 100%;
       }
     }
     span {
       padding-left: 32px;
       font-size: 42px;
       color: #f1c120;
     }
    }
    .warn {
      padding-top: 84px;
      padding-left: 25px;
      color: #ffffff;
      opacity: 0.7;
      font-size: 22px;
    }
    .foot {
     width: 100%;
     background-color: #fff;
     border-radius: 24px 24px 0px 0px;
     position: fixed;
     bottom: 0;
     padding: 45px 54px 82px 60px;
     .unbind-car {
       padding-bottom: 56px;
       .unbind {
         display: inline-block;
         width: 100px;
         color: #fff;
         font-size: 24px;
         height: 36px;
         line-height: 36px;
         text-align: center;
         background-image: linear-gradient(-45deg,
            #8f62fb 0%,
            #ab7bfc 100%);
         border-radius: 4px;
       }
       .car {
         font-size: 40px;
         letter-spacing: 4px;
         color: #333333;
         padding-left: 25px;
       }
     }
     .enter-time {
       display: flex;
       justify-content: space-around;
       color: #333333;
       font-size: 28px;
     }
     .park-time {
       display: flex;
       justify-content: space-around;
       color: #333333;
       font-size: 28px;
     }
     .need-money {
       display: flex;
       justify-content: space-around;
       color: #333333;
       font-size: 28px;
     }
    }
}
</style>
