<template>
  <div class="payment-success">
    <div class="success-top">
       <div class="top-pic"><img src="../assets/images/success.png" alt=""></div>
       <div class="top">支付成功</div>
    </div>
    <div class="success-main">
      <div class="mark-unbind">
        <span class="unbind" v-if="!showicon">未绑定</span>
        <span class="bind" v-if="showicon">已绑定</span>
        <span class="mark">沪A3489</span>
      </div>
      <div class="mark-enter">
        入场时间：2018/07/11 09:32
      </div>
      <div class="mark-park">
        停车时长：10小时59分钟
      </div>
      <div class="mark-exit">
        出场时间：2018/07/11 11:40
      </div>
      <div class="success-info">
        <div class="info-time">
          支付时间：2018/07/11 11:40
        </div>
        <div class="info-money">
          已付费用：<span>34元</span>
        </div>
      </div>
    </div>
    <div class="success-bottom">
      <p>请在15分钟内离场，超过15分钟系统会重新开始计费.</p>
      <div class="bottom-history">缴费记录</div>
      <div class="back">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     showicon:true
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.payment-success {
  background-color: #f5f6f7;
  position: absolute;
  width: 100%;
  height: 100%;
  .success-top {
   text-align: center;
   height: 370px;
   background: url("../assets/images/background-top.png") no-repeat;
   background-size: cover;
   .top-pic {
     display: inline-block;
     padding-top: 140px;
     width: 81px;
     height: 54px;
     img {
       width: 100%;
     }
   }
   .top {
     padding-top: 35px;
     font-size: 28px;
     color: #fff;
   }
  }
  .success-main {
    margin-top: 30px;
    background-color: #fff;
    padding: 45px 53px 34px 53px;
    box-sizing: border-box;
    .mark-unbind {
      padding-bottom: 35px;
      .unbind {
        color: #fff;
        padding: 6px 15px;
        background-image: linear-gradient(-45deg,
          #8f62fb 0%,
          #ab7bfc 100%);
        border-radius: 4px;
      }
      .bind {
        color: #fff;
        padding: 6px 15px;
        background-image: linear-gradient(-45deg,
          #2d7afb 0%,
          #3faafc 100%);
        border-radius: 4px;
      }
      .mark {
        padding-left: 20px;
        font-size: 40px;
        color: #333;
      }
    }
    .mark-enter {
      font-size: 26px;
      color: #666;
      padding-bottom: 29px;
    }
    .mark-park {
      font-size: 26px;
      color: #666;
      padding-bottom: 29px;
    }
    .mark-exit {
      font-size: 26px;
      color: #666;
      padding-bottom: 29px;
      border-bottom: 1px solid #ededed;
    }
    .success-info {
      margin-top: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info-time {
        font-size: 26px;
        color: #666;
      }
      .info-money {
        font-size: 24px;
        color: #333;
        span {
          font-size: 48px;
          color: #f1c120;
          vertical-align: middle;
        }
      }
    }
  }
  .success-bottom {
    padding: 18px 55px 0;
    p {
      font-size: 24px;
      color: #888;
      padding-bottom: 72px;
    }
    .bottom-history {
        cursor: pointer;
        text-align: center;
        height: 80px;
        line-height: 80px;
        width: 100%;
        font-size: 30px;
        color: #000;
        background-color: #f1c120;
        margin-bottom: 32px;
        border-radius: 8px;
    }
    .back {
        text-align: center;
        height: 80px;
        line-height: 80px;
        width: 100%;
        font-size: 30px;
        color: #000;
        background-color: #fff;
        border-radius: 8px;
        cursor: pointer;
    }
  }
}
</style>
